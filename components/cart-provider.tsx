'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CartItem, cartCount, cartSubtotal, getCartProduct } from '@/data/products'

export type CustomBuildItem = { productId: string; buildName: string; components: { category: string; name: string; price: number }[]; total: number }
type BasketItem = CartItem | CustomBuildItem
type CartContextType = { items: BasketItem[]; add: (id: string) => void; addCustomBuild: (item: Omit<CustomBuildItem, 'productId'>) => void; update: (id: string, quantity: number) => void; remove: (id: string) => void; clear: () => void; count: number; subtotal: number }
const CartContext = createContext<CartContextType | null>(null)
const isCustomBuild = (item: BasketItem): item is CustomBuildItem => 'components' in item

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([])
  useEffect(() => { const raw = window.localStorage.getItem('pc-shack-cart'); if (raw) { try { setItems(JSON.parse(raw)) } catch { window.localStorage.removeItem('pc-shack-cart') } } }, [])
  useEffect(() => { window.localStorage.setItem('pc-shack-cart', JSON.stringify(items)) }, [items])
  const value = useMemo(() => ({
    items,
    add: (id: string) => setItems(v => { const found = v.find(i => !isCustomBuild(i) && i.productId === id); return found ? v.map(i => !isCustomBuild(i) && i.productId === id ? { ...i, quantity: i.quantity + 1 } : i) : [...v, { productId: id, quantity: 1 }] }),
    addCustomBuild: (item: Omit<CustomBuildItem, 'productId'>) => setItems(v => [...v, { ...item, productId: `custom-build-${Date.now()}` }]),
    update: (id: string, quantity: number) => setItems(v => quantity > 0 ? v.map(i => i.productId === id && !isCustomBuild(i) ? { ...i, quantity } : i) : v.filter(i => i.productId !== id)),
    remove: (id: string) => setItems(v => v.filter(i => i.productId !== id)),
    clear: () => setItems([]),
    count: cartCount(items.filter(i => !isCustomBuild(i)) as CartItem[]) + items.filter(isCustomBuild).length,
    subtotal: cartSubtotal(items.filter(i => !isCustomBuild(i)) as CartItem[]) + items.filter(isCustomBuild).reduce((sum, i) => sum + i.total, 0),
  }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export const useCart = () => { const ctx = useContext(CartContext); if (!ctx) throw new Error('useCart must be used inside CartProvider'); return ctx }
export const cartProduct = (id: string) => getCartProduct(id)
export { isCustomBuild }

'use client'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { PageLayout, Breadcrumbs } from '@/components/page-layout'
import { builderCategories, builderComponents, formatCurrency } from '@/data/products'
import { useCart } from '@/components/cart-provider'
import { Check } from 'lucide-react'

export default function CustomPCsPage() {
  const router = useRouter()
  const { addCustomBuild } = useCart()
  const [selected, setSelected] = useState<Record<string, string>>({})
  const total = useMemo(() => Object.values(selected).reduce((sum, id) => sum + (builderComponents.find(c => c.id === id)?.price ?? 0), 0), [selected])
  const selectedComponents = builderCategories.flatMap(category => { const item = builderComponents.find(c => c.category === category && c.id === selected[category]); return item ? [{ category, name: item.name, price: item.price }] : [] })
  const discussBuild = () => { if (!selectedComponents.length) return; addCustomBuild({ buildName: `Custom PC build (${selectedComponents.length} components)`, components: selectedComponents, total }); router.push('/cart') }
  return <PageLayout><Breadcrumbs items={[{ label: 'Custom PCs' }]} /><section className="page-hero"><p className="eyebrow">PC Shack / Custom build studio</p><h1>Your next PC <em>starts here.</em></h1><p>Choose a starting point from our development component catalogue. Your selections are added to the basket so our team can see exactly what you want to discuss.</p></section><div className="builder-layout"><div className="builder-options">{builderCategories.map(cat => <section className="builder-category" key={cat}><div className="category-heading"><p className="eyebrow">Component category</p><h2>{cat}</h2></div><div className="component-grid">{builderComponents.filter(c => c.category === cat).map(c => <button className={selected[cat] === c.id ? 'component-option active' : 'component-option'} onClick={() => setSelected({ ...selected, [cat]: c.id })} key={c.id}><img src={c.image} alt="Component image placeholder" /><span>{c.name}</span><small>{formatCurrency(c.price)} · Placeholder</small>{selected[cat] === c.id && <Check size={18} />}</button>)}</div></section>)}</div><aside className="builder-summary"><p className="eyebrow">Build summary</p><h2>Estimated Build <em>Total</em></h2>{selectedComponents.map(c => <p key={c.category}>{c.category}<strong>{formatCurrency(c.price)}</strong></p>)}<hr /><h3>{formatCurrency(total)}</h3><span className="compatibility">Compatibility is a placeholder until PC Shack&apos;s live component catalogue and rules are connected.</span><button className="button button-primary" disabled={!selectedComponents.length} onClick={discussBuild}>{selectedComponents.length ? 'Add build to basket ↗' : 'Select components first'}</button><small>Next: review your build in the basket, then send it to PC Shack with every selected component attached.</small></aside></div></PageLayout>
}

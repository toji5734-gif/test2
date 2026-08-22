'use client'
import Link from 'next/link'
import { PageLayout, Breadcrumbs } from '@/components/page-layout'
import { useCart, cartProduct, isCustomBuild } from '@/components/cart-provider'
import { formatCurrency } from '@/data/products'

export default function CheckoutPage() {
  const { items, subtotal } = useCart()
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Cart', href: '/cart' }, { label: 'Checkout' }]} />
      <section className="page-hero compact">
        <p className="eyebrow">PC Shack / Checkout</p>
        <h1>Review your <em>request</em></h1>
        <p>Custom builds are sent as a clear enquiry for PC Shack to confirm. No payment is taken in this development flow.</p>
      </section>
      {!items.length ? (
        <div className="empty-state"><h2>Your basket is empty</h2><Link className="button button-primary" href="/custom-pcs">Configure a Custom PC</Link></div>
      ) : (
        <div className="checkout-layout">
          <form className="contact-form">
            <h2>Your details</h2>
            <label>Name<input required name="name" /></label>
            <label>Email<input required type="email" name="email" /></label>
            <label>Phone<input required name="phone" /></label>
            <h2>Collection / delivery</h2>
            <label>Address<input required name="address" /></label>
            <label>Town / City<input required name="city" /></label>
            <label>Postcode<input required name="postcode" /></label>
            <button className="button button-primary" type="button" onClick={() => alert('Checkout is not connected yet. Your selected custom build is present in the basket for PC Shack to review.')}>Send enquiry to PC Shack ↗</button>
          </form>
          <aside className="order-summary">
            <h2>Request summary</h2>
            {items.map(item => {
              if (isCustomBuild(item)) return <div key={item.productId}><p><strong>{item.buildName}</strong><span>{formatCurrency(item.total)}</span></p><small>{item.components.map(c => `${c.category}: ${c.name}`).join(' · ')}</small></div>
              const product = cartProduct(item.productId)
              return product ? <p key={item.productId}>{product.name} × {item.quantity}<strong>{formatCurrency(product.price * item.quantity)}</strong></p> : null
            })}
            <hr />
            <p>Estimated subtotal<strong>{formatCurrency(subtotal)}</strong></p>
            <p>Delivery<span>To be configured</span></p>
            <p>VAT<span>Not configured</span></p>
            <h3>Estimated total<strong>{formatCurrency(subtotal)}</strong></h3>
            <small>Custom PC totals are estimates. Compatibility, stock, delivery, VAT, and payment are confirmed separately by PC Shack.</small>
          </aside>
        </div>
      )}
    </PageLayout>
  )
}

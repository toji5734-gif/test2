'use client'

import Link from 'next/link'
import { ArrowUpRight, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from './cart-provider'

const links = [['Shop', '/shop'], ['PC Repairs', '/repairs'], ['Custom PCs', '/custom-pcs'], ['Services', '/services'], ['About', '/about'], ['Contact', '/contact']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const { count } = useCart()
  return <>
    <div className="announcement">Independent IT specialists · Hull since 2000 <span>—</span> <a href="tel:01482245000">01482 245000</a></div>
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="PC Shack home"><span className="mark">PC</span><span>SHACK</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Open search" aria-expanded={search} onClick={() => setSearch(!search)}><Search size={18} /></button><Link className="basket" href="/cart" aria-label={`Basket, ${count} items`}><ShoppingBag size={18} /><span>{count}</span></Link><Link className="repair-button" href="/repairs/book">Book a Repair <ArrowUpRight size={16} /></Link><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </header>
    {search && <div className="search-drawer"><label htmlFor="site-search">Search PC Shack catalogue</label><input id="site-search" autoFocus placeholder="Search products..." onKeyDown={e => { if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) window.location.href = `/shop?search=${encodeURIComponent(e.currentTarget.value)}` }} /><span>Press Enter to search</span></div>}
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}<Link className="repair-button" onClick={() => setOpen(false)} href="/repairs/book">Book a Repair <ArrowUpRight size={16} /></Link></nav>}
  </>
}

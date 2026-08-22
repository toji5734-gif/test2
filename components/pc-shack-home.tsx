'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, Cpu, HardDrive, Laptop, Network, Search, ShieldCheck, ShoppingBag, Wrench } from 'lucide-react'
import { useState } from 'react'

const services = [
  { icon: Wrench, title: 'PC repairs', copy: 'Diagnostics, troubleshooting and upgrades for desktop systems.', href: '/repairs' },
  { icon: Laptop, title: 'Laptop & Mac', copy: 'Practical help for slow machines, screens and hardware issues.', href: '/repairs' },
  { icon: Cpu, title: 'Custom PCs', copy: 'A considered build, matched to how you work, play and create.', href: '/custom-pcs' },
  { icon: Network, title: 'Business IT', copy: 'Straightforward support for networks, systems and growing teams.', href: '/services' },
]

export default function PcShackHome() {
  const [selected, setSelected] = useState('Balanced')
  return (
    <main className="site-shell">
      <div className="announcement">Independent IT specialists · Hull since 2000 <span>—</span> <a href="tel:01482245000">01482 245000</a></div>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="PC Shack home"><span className="mark">PC</span><span>SHACK</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {[['Shop','/shop'],['PC Repairs','/repairs'],['Custom PCs','/custom-pcs'],['Services','/services'],['About','/about'],['Contact','/contact']].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions"><Link className="icon-button" href="/shop" aria-label="Search products"><Search size={18} /></Link><Link className="basket" href="/cart" aria-label="View cart"><ShoppingBag size={18} /><span>0</span></Link><Link className="repair-button" href="/repairs/book">Book a Repair <ArrowUpRight size={16} /></Link></div>
      </header>

      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Local knowledge. Proper support.</p><h1>Technology that<br /><em>works harder.</em></h1><p className="hero-lede">PC repairs, custom-built computers, hardware and IT support from an experienced independent team in Hull.</p><div className="hero-actions"><Link className="button button-primary" href="/shop">Shop PCs & components <ArrowUpRight size={17} /></Link><Link className="button button-quiet" href="/repairs/book">Book a Repair <ArrowUpRight size={17} /></Link></div><div className="hero-note"><span className="signal" /> Honest advice · Clear next steps</div></div>
        <div className="hero-visual"><div className="visual-label">PC SHACK / WORKSHOP 01</div><Image src="/pc-shack-workshop.png" alt="PC components and tools in a workshop" width={900} height={760} priority /><div className="visual-caption"><span>Built with care</span><span>HU3 4TT · HULL</span></div></div>
      </section>

      <section className="trust-strip"><div>Established <strong>2000</strong></div><div><strong>50+</strong> years collective experience</div><div><strong>Fair</strong> pricing</div><div>Independent <strong>Hull</strong> business</div></section>
      <section className="intro-section"><div className="section-kicker">01 / What we do</div><div className="intro-grid"><h2>Technology should<br /><span>work for you.</span></h2><div><p>Whether it&apos;s a repair, an upgrade or a machine built from the ground up, we keep things clear, considered and jargon-free.</p><Link className="text-link" href="/services">Explore our services <ArrowUpRight size={16} /></Link></div></div></section>
      <section className="services-section"><div className="section-heading"><div><div className="section-kicker">Our expertise</div><h2>Practical help.<br /><span>Properly done.</span></h2></div><p>Support for home users, creatives and growing businesses across Hull and East Yorkshire.</p></div><div className="service-list">{services.map(({ icon: Icon, title, copy, href }, i) => <Link className="service-row" href={href} key={title}><span className="service-number">0{i + 1}</span><span className="service-icon"><Icon size={22} strokeWidth={1.5} /></span><span className="service-title">{title}</span><span className="service-copy">{copy}</span><ArrowUpRight className="service-arrow" size={19} /></Link>)}</div></section>
      <section className="custom-section"><div className="custom-aside"><div className="section-kicker">02 / Build your own</div><h2>Your next PC<br /><em>starts here.</em></h2><p>Choose a starting point and tell us what matters. We&apos;ll help match the parts and confirm the details.</p><Link className="button button-light" href="/custom-pcs">Start configuring <ArrowUpRight size={17} /></Link></div><div className="configurator"><div className="config-top"><span>PC BUILDER / DRAFT</span><span className="draft-status"><i /> Compatibility placeholder</span></div><div className="config-title"><h3>Configure a starting point</h3><p>Final component compatibility is confirmed by our team.</p></div><div className="profile-options">{['Quiet office', 'Balanced', 'Creator workstation'].map((option) => <button className={selected === option ? 'profile active' : 'profile'} onClick={() => setSelected(option)} key={option}><span>{option}</span><small>{option === 'Quiet office' ? 'Focused & efficient' : option === 'Balanced' ? 'Everyday versatility' : 'Power for production'}</small>{selected === option && <Check className="check" size={17} />}</button>)}</div><div className="estimate"><span>Estimated build</span><strong>To be confirmed</strong><small>We&apos;ll quote after understanding your requirements.</small></div><Link className="config-next" href="/custom-pcs">Open PC builder <ArrowUpRight size={17} /></Link></div></section>
      <section className="shop-section"><div className="shop-copy"><div className="section-kicker">03 / Hardware shop</div><h2>Good kit.<br /><span>Good advice.</span></h2><p>Our catalogue is being carefully migrated. We&apos;d rather show you nothing than show you the wrong thing.</p><Link className="button button-primary" href="/shop">View the shop <ArrowUpRight size={17} /></Link></div><div className="migration-state"><div className="migration-icon"><HardDrive size={25} /></div><div><span className="state-label">CATALOGUE STATUS</span><h3>Migration in progress</h3><p>Verified products, pricing and availability will appear here.</p><Link className="text-link" href="/contact">Ask about hardware <ArrowUpRight size={16} /></Link></div></div></section>
      <section className="booking-section"><div className="booking-heading"><div className="section-kicker">04 / Need a repair?</div><h2>Let&apos;s get it<br /><em>sorted.</em></h2><p>Start with a few details and a member of the team will come back to you with the next step.</p><Link className="text-link" href="/repairs/book">Open the repair form <ArrowUpRight size={16} /></Link></div><div className="booking-form"><div className="contact-details"><p><ShieldCheck size={20} /> Clear process, honest advice</p><p><Wrench size={20} /> Desktop, laptop and Mac support</p><p><Search size={20} /> Assessment before any work begins</p></div><Link className="button button-primary" href="/repairs/book">Book a Repair <ArrowUpRight size={17} /></Link></div></section>
      <section className="contact-band"><div><div className="section-kicker">Find us</div><h2>Come and see us<br /><span>in Hull.</span></h2></div><div className="contact-details"><p>PC Shack<br />Witty Street<br />Hull, East Yorkshire<br />HU3 4TT</p><a href="tel:01482245000">01482 245000</a><a href="mailto:info@pcshack.co.uk">info@pcshack.co.uk</a></div><div className="contact-details"><p>Customer services</p><a href="mailto:customerservices@pcshack.co.uk">customerservices@pcshack.co.uk</a><Link className="text-link" href="/contact">Contact the team <ArrowUpRight size={16} /></Link></div></section>
    </main>
  )
}

export { PcShackHome }

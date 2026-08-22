import {SiteHeader} from './site-header'; import {SiteFooter} from './site-footer'
export function PageLayout({children}:{children:React.ReactNode}){return <main className="site-shell"><SiteHeader/><div className="page-content">{children}</div><SiteFooter/></main>}
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a>{items.map((item)=><span key={item.label}> / {item.href?<a href={item.href}>{item.label}</a>:item.label}</span>)}</nav>}

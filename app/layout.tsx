import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/cart-provider'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://pcshack.co.uk'),
  title: 'PC Shack | Independent IT & PC Specialists in Hull',
  description: 'PC repairs, custom-built computers, hardware, Mac repairs and IT support from PC Shack in Hull, East Yorkshire.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'PC Shack | Independent IT & PC Specialists in Hull',
    description: 'Independent IT and PC specialists serving Hull since 2000.',
    url: 'https://pcshack.co.uk',
    siteName: 'PC Shack',
    locale: 'en_GB',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d0d',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body className="antialiased"><CartProvider>{children}</CartProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

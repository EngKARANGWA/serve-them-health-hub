import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serve Them Health Hub | Wholesome Foods & Health Ministry',
  description: 'Health education ministry and natural foods. Discover wholesome products, Bible lessons, and more at Serve Them Health Hub.',
  generator: 'v0.dev',
  keywords: ['health food', 'ministry', 'wholesome', 'natural', 'bible', 'three angels', 'nutrition', 'serve them'],
  authors: [{ name: 'Serve Them Health Hub', url: 'https://server-the-healyh.netlify.app/' }],
  openGraph: {
    title: 'Serve Them Health Hub',
    description: 'Wholesome foods and health education ministry.',
    url: 'https://server-the-healyh.netlify.app/',
    siteName: 'Serve Them Health Hub',
    images: [
      {
        url: '/images/family.png',
        width: 800,
        height: 600,
        alt: 'Serve Them Health Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serve Them Health Hub',
    description: 'Wholesome foods and health education ministry.',
    images: ['/images/family.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

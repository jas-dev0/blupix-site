import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BluPix — Technology for Small Businesses & Creators',
  description: 'Custom web development, automation, and technical consulting for small businesses and content creators. Led by Jasmine Allen, Southfield MI.',
  openGraph: {
    title: 'BluPix — Technology for Small Businesses & Creators',
    description: 'Custom web development, API integrations, AI automation, branding, and IT support.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

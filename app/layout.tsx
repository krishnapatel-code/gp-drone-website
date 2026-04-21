import type { Metadata, Viewport } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  variable: '--font-rajdhani',
  weight: ['500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Gujarat Police Drone Surveillance Platform',
  description: 'AI-Powered Drone Surveillance Platform for Smart Policing - Rapid Response, Real-Time Monitoring, and Enhanced Public Safety for Gujarat Police',
  keywords: ['Gujarat Police', 'Drone Surveillance', 'Smart Policing', 'AI Surveillance', 'Public Safety'],
  authors: [{ name: 'Gujarat Police' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

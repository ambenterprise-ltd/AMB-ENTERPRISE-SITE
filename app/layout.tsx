import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'AMB Enterprise | Your Trustful Companion',
  description: 'Luxury software engineering studio specializing in sophisticated digital architecture, high-performance applications, and seamless web automation.',
  generator: 'v0.app',
  openGraph: {
    title: 'AMB Enterprise | Your Trustful Companion',
    description: 'Luxury software engineering studio specializing in sophisticated digital architecture, high-performance applications, and seamless web automation.',
    url: 'https://ambenterprise.com',
    siteName: 'AMB Enterprise',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: 'AMB Enterprise Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMB Enterprise | Your Trustful Companion',
    description: 'Luxury software engineering studio specializing in sophisticated digital architecture.',
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-white min-h-screen relative">
        {/* Film Grain Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {children}
        <Toaster theme="dark" position="bottom-right" className="font-sans" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

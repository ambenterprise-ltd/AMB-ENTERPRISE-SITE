import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { MotionProvider } from '@/components/motion-provider'
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
  metadataBase: new URL('https://ambenterprise.com'),
  title: 'AMB Enterprise — AI, Automation & Software Engineering',
  description: 'AMB Enterprise engineers AI agents, automation systems, business software, web applications and intelligent digital products.',
  openGraph: {
    title: 'AMB Enterprise — AI, Automation & Software Engineering',
    description: 'AMB Enterprise engineers AI agents, automation systems, business software, web applications and intelligent digital products.',
    url: 'https://ambenterprise.com',
    siteName: 'AMB Enterprise',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/amb-logo.png',
        width: 662,
        height: 387,
        alt: 'AMB Enterprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMB Enterprise — AI, Automation & Software Engineering',
    description: 'AMB Enterprise engineers AI agents, automation systems, business software, web applications and intelligent digital products.',
    images: ['/amb-logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '64x64',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#0B0C0E] text-[#E2E8F0] min-h-screen relative">
        {/* Film Grain Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAABykmSrAAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMA//////8A701mAAAAJUlEQVQ4y2NgQAX8DIwsDIxQwsDAwMDICCVAMoxgwKcfhkEPAQAcWwMRvF8YHQAAAABJRU5ErkJggg==")`,
            backgroundRepeat: 'repeat',
          }}
        />
        <MotionProvider>{children}</MotionProvider>
        <Toaster className="font-sans" position="bottom-right" theme="dark" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

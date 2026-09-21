import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'
import { MotionProvider } from '@/components/motion-provider'
import { JsonLd } from '@/components/seo/JsonLd'
import { siteConfig, absoluteUrl } from '@/config/site'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'AMB Enterprise Ltd', url: siteConfig.url }],
  creator: 'AMB Enterprise Ltd',
  publisher: 'AMB Enterprise Ltd',
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: 'AMB Enterprise Ltd',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'AMB Enterprise Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@ambenterprise',
  },
  robots: {
    index: true,
    follow: true,
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

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl('/amb-logo.png'),
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ].filter(Boolean),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support & Engineering',
    url: `${siteConfig.url}/contact`,
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
        <JsonLd schema={[websiteSchema, organizationSchema]} />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

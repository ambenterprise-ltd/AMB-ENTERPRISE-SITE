import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with AMB Enterprise Ltd to discuss your next intelligent software or automation project.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | AMB Enterprise Ltd',
    description:
      'Get in touch with AMB Enterprise Ltd to discuss your next intelligent software or automation project.',
  },
}

export default function ContactPage() {
  return (
    <div className="site-shell relative z-0 min-h-screen overflow-x-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1E23] via-[#0B0C0E] to-[#070809] text-[#E2E8F0]">
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full px-8 pt-24 md:pt-32 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

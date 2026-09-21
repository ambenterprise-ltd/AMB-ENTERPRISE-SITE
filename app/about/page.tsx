import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { EngineeringProcess } from "@/components/engineering-process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AMB Enterprise Ltd - our engineering philosophy, mission, and the autonomous AI and software systems we build.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | AMB Enterprise Ltd',
    description:
      'Learn about AMB Enterprise Ltd - our engineering philosophy, mission, and the autonomous AI and software systems we build.',
  },
}

export default function AboutPage() {
  return (
    <div className="site-shell relative z-0 min-h-screen overflow-x-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1E23] via-[#0B0C0E] to-[#070809] text-[#E2E8F0]">
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full px-8 pt-24 md:pt-32 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <About />
        <EngineeringProcess />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

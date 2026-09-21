import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Portfolio } from "@/components/portfolio"
import { FeaturedSystem } from "@/components/featured-system"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: 'Engineered Systems',
  description:
    'Explore systems and software platforms engineered by AMB Enterprise Ltd - autonomous AI agents, media engines, and enterprise solutions.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Engineered Systems | AMB Enterprise Ltd',
    description:
      'Explore systems and software platforms engineered by AMB Enterprise Ltd - autonomous AI agents, media engines, and enterprise solutions.',
  },
}

export default function PortfolioPage() {
  return (
    <div className="site-shell relative z-0 min-h-screen overflow-x-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1E23] via-[#0B0C0E] to-[#070809] text-[#E2E8F0]">
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full px-8 pt-24 md:pt-32 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <FeaturedSystem />
        <Portfolio />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

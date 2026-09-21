import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { TechnologyStack } from "@/components/technology-stack"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata: Metadata = {
  title: 'Engineering Services',
  description:
    'Explore the engineering services offered by AMB Enterprise Ltd - autonomous AI agents, intelligent workflow automation, and custom software systems.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Engineering Services | AMB Enterprise Ltd',
    description:
      'Explore the engineering services offered by AMB Enterprise Ltd - autonomous AI agents, intelligent workflow automation, and custom software systems.',
  },
}

export default function ServicesPage() {
  return (
    <div className="site-shell relative z-0 min-h-screen overflow-x-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1E23] via-[#0B0C0E] to-[#070809] text-[#E2E8F0]">
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full px-8 pt-24 md:pt-32 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <Services />
        <TechnologyStack />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

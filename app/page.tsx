import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { CapabilityStrip } from "@/components/capability-strip"
import { FeaturedSystem } from "@/components/featured-system"
import { EngineeringProcess } from "@/components/engineering-process"
import { TechnologyStack } from "@/components/technology-stack"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <div className="site-shell relative z-0 min-h-screen overflow-x-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B1E23] via-[#0B0C0E] to-[#070809] text-[#E2E8F0]">
      <ScrollProgress />
      <Header />
      <main id="top" className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <Hero />
        <CapabilityStrip />
        <FeaturedSystem />
        <Services />
        <Portfolio />
        <EngineeringProcess />
        <TechnologyStack />
        <About />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

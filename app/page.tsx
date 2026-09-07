import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#151515] via-[#050505] to-[#000000] text-white">
      <ScrollProgress />
      <Header />
      <main className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

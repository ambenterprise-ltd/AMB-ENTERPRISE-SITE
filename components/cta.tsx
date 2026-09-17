import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative z-10 overflow-hidden rounded-sm border border-[#2C353D] bg-[#1B1E23] px-6 py-16 text-center md:px-12 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,168,181,0.08),transparent_58%)]" />
      <div className="relative mx-auto max-w-2xl">
        <p className="text-xs md:text-sm font-semibold tracking-[0.24em] text-[#00A8B5]">START A CONVERSATION</p>
        <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[0.06em] text-[#D4C5B0] md:text-6xl">Have a Workflow Worth Automating?</h2>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#E2E8F0]/80">Tell us what you&apos;re trying to build. We&apos;ll turn the idea into an engineered system.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-sm border border-[#D4C5B0] bg-transparent px-12 py-5 text-sm md:text-base font-semibold tracking-[0.18em] text-[#D4C5B0] transition-all duration-300 hover:bg-[#D4C5B0] hover:text-[#0B0C0E]">START A PROJECT <ArrowRight className="h-5 w-5" /></a>
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-sm border border-[#2C353D] bg-transparent px-12 py-5 text-sm md:text-base font-semibold tracking-[0.18em] text-[#E2E8F0] transition-all duration-300 hover:border-[#00A8B5] hover:text-[#00A8B5]">VIEW OUR WORK</a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { SectionHeading } from "./section-heading"

const architecture = ["LEGAL KNOWLEDGE", "AI RESEARCH", "SCRIPT ENGINE", "URDU VOICE", "VIDEO PIPELINE", "SUBTITLE ENGINE", "LAW FIRM BRANDING", "SOCIAL DISTRIBUTION"]
const tags = ["LEGAL TECH", "SOCIAL MEDIA", "AI VIDEO", "AUTOMATION"]

export function FeaturedSystem() {
  return (
    <section id="systems" className="relative z-10 py-24 md:py-32">
      <SectionHeading
        eyebrow="FEATURED SYSTEM"
        title="Legal Videos Agent."
        description="A specialized autonomous video engine designed for lawyers and legal professionals to build and maintain their digital authority on social media through automated legal research, script drafting, and branded video production."
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-12 grid overflow-hidden rounded-sm border border-[#2C353D] bg-[#1B1E23] lg:grid-cols-[0.92fr_1.08fr]"
      >
        {/* Left Specification Column */}
        <div className="relative border-b border-[#2C353D] p-7 md:p-10 lg:border-r lg:border-b-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,229,255,0.08),transparent_44%)]" />
          <div className="relative">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">
              AI / LEGAL TECHNOLOGY / AUTOMATION
            </p>

            {/* Terminal Live Status Badge: Turquoise #00E5FF */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[#00E5FF] font-mono shadow-[0_0_12px_rgba(0,229,255,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
              IN DEVELOPMENT
            </div>

            <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-[#E2E8F0]/80">
              This system is being engineered as a reliable, staged workflow for legal education content. It is not represented as a finished production product.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-[#2C353D] bg-[#0B0C0E]/70 px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] text-[#E2E8F0]/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Terminal System Architecture: Pure Black #000000 */}
        <div className="bg-[#000000] p-7 md:p-10 border-t lg:border-t-0 border-[#2C353D]">
          <div className="flex items-center justify-between mb-7">
            <p className="text-xs md:text-sm font-semibold tracking-[0.22em] text-[#00E5FF] uppercase font-mono">
              SYSTEM ARCHITECTURE
            </p>
            <span className="text-[0.68rem] tracking-[0.15em] text-[#00E5FF] font-mono">STAGED_PIPELINE.LOG</span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {architecture.map((step, index) => (
              <div key={step} className="contents">
                <div className="flex items-center justify-between rounded-sm border border-[#2C353D] bg-[#1B1E23] px-5 py-4 text-xs md:text-sm font-medium tracking-[0.15em] text-[#E2E8F0] transition-colors duration-300 hover:border-[#00A8B5]/60 hover:text-white">
                  <span className="mr-3 font-mono text-[#00A8B5]">0{index + 1}</span>{step}
                </div>
                {index < architecture.length - 1 && (
                  <ArrowDown aria-hidden="true" className="col-span-full mx-auto -my-1 h-4 w-4 text-[#00A8B5]/50 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedSystem

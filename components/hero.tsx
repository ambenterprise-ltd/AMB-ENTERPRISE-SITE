"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { SystemMapCard } from "./system-map-card"

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-[92vh] items-center overflow-hidden py-32 md:py-36 isolate">
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-[#00A8B5]/[0.04] blur-[140px]" />
        <div className="absolute right-[8%] top-[32%] h-36 w-36 rounded-full border border-[#2C353D]" />
        <div className="absolute right-[13%] top-[37%] h-12 w-12 rounded-full border border-[#00A8B5]/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10"
      >
        <div className="max-w-4xl text-center lg:text-left">
          {/* Eyebrow in Electric Teal */}
          <p className="mb-6 text-xs font-semibold tracking-[0.24em] text-[#00A8B5] md:text-sm uppercase">
            AI • AUTOMATION • SOFTWARE • DIGITAL SYSTEMS
          </p>

          {/* Hero Typography: AMB ENTERPRISE in Metallic Champagne */}
          <h1 className="font-serif text-5xl leading-[1.04] tracking-[0.06em] text-[#D4C5B0] sm:text-6xl md:text-7xl lg:text-8xl">
            AMB ENTERPRISE
            <span className="block mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E2E8F0]/90 tracking-[0.03em]">
              We Engineer Intelligent Systems.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden md:block mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#D1D5DB] md:text-lg lg:mx-0"
          >
            Building autonomous AI agents, automation engines, and scalable software systems.
          </motion.p>

          {/* Action Buttons: 4px rounded-sm, Champagne outline to solid hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:items-start"
          >
            <MagneticButton
              href="#portfolio"
              className="inline-flex items-center gap-3 rounded-sm border border-[#D4C5B0] bg-transparent px-10 py-4.5 text-sm md:text-base font-semibold tracking-[0.18em] text-[#D4C5B0] transition-all duration-300 hover:bg-[#D4C5B0] hover:text-[#0B0C0E] hover:shadow-[0_0_25px_rgba(212,197,176,0.3)]"
            >
              Explore Our Work <ArrowRight className="h-5 w-5" />
            </MagneticButton>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-sm border border-[#2C353D] bg-[#1B1E23]/60 px-10 py-4.5 text-sm md:text-base font-semibold tracking-[0.18em] text-[#E2E8F0] transition-colors duration-300 hover:border-[#00A8B5] hover:text-[#00A8B5]"
            >
              Start a Project
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <SystemMapCard />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

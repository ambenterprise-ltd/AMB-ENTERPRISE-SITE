"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "./magnetic-button"

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center relative z-10">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#BF953F]/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.15em] leading-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent mb-6">
          AMB ENTERPRISE
        </h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D1D5DB] mb-12"
        >
          Your Trustful Companion — AMB ENTERPRISE
        </motion.p>

        {/* CTA Button with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <MagneticButton
            href="#portfolio"
            className="inline-block px-10 py-4 border border-[#BF953F] text-[#FCF6BA] text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#BF953F]/20 hover:shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:text-white"
          >
            Explore Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

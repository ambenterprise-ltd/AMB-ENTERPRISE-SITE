"use client"

import { motion } from "framer-motion"
import { AMBLogo } from "@/components/amb-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-14 border-t border-[#2C353D] relative z-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 text-center md:text-left">
        {/* Left - Branding */}
        <div className="flex flex-col items-center md:items-start">
          <AMBLogo height={64} />
          <p className="mt-3 text-xs md:text-sm font-semibold uppercase text-[#D4C5B0]/80 tracking-[0.25em]">
            AI • Automation • Software
          </p>
          <p className="mt-4 max-w-xs text-sm md:text-base leading-relaxed text-[#E2E8F0]/80">
            We engineer intelligent systems for real-world workflows.
          </p>
        </div>

        {/* Right - Copyright */}
        <p className="text-xs md:text-sm text-[#E2E8F0]/60 tracking-[0.15em] uppercase text-center md:text-right">
          © {currentYear} A Product Of AMB Enterprise.<br className="hidden md:block" /> All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

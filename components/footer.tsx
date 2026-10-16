"use client"

import { motion } from "framer-motion"
import { AMBLogo } from "@/components/amb-logo"
import { STAFF_LOGIN_URL } from "@/config/site"

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

        {/* Right - Copyright & Staff Login */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs md:text-sm text-[#E2E8F0]/60 tracking-[0.15em] uppercase text-center md:text-right">
          <p>
            © {currentYear} A Product Of AMB Enterprise. All rights reserved.
          </p>
          <span className="hidden sm:inline text-[#2C353D]">•</span>
          <a
            href={STAFF_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E2E8F0]/50 hover:text-[#00A8B5] transition-colors duration-300"
          >
            Staff Login
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

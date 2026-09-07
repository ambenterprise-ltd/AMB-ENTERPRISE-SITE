"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 text-center md:text-left">
        {/* Left - Branding */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-2xl md:text-3xl tracking-[0.1em] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
            AMB Enterprise
          </span>
          <p className="mt-2 text-xs md:text-sm uppercase text-[#A1A1AA]/60 tracking-[0.25em]">
            Your Trustful Companion
          </p>
        </div>

        {/* Right - Copyright */}
        <p className="text-xs md:text-sm text-[#A1A1AA]/40 tracking-[0.15em] uppercase text-center md:text-right">
          © {currentYear} A Product Of AMB Enterprise.<br className="hidden md:block" /> All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

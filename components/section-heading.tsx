"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      {eyebrow && (
        <p className="mb-4 text-xs md:text-sm font-semibold tracking-[0.24em] text-[#00A8B5] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-[1.12] tracking-[0.05em] text-[#D4C5B0] md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-[#E2E8F0]/80">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading

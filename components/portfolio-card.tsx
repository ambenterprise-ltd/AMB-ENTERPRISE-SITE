"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/projects"

interface PortfolioCardProps {
  project: Project
  index: number
  onView: (project: Project) => void
}

export function PortfolioCard({ project, index, onView }: PortfolioCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty("--mouse-x", `${x}px`)
    cardRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="portfolio-card group relative flex min-h-[19rem] flex-col rounded-sm border border-[#2C353D] bg-[#1B1E23] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/50 hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)] lg:p-8"
    >
      {/* Mouse spotlight overlay */}
      <div 
        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,229,255,0.06), transparent 45%)",
        }}
      />

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Project Number */}
        <span className="absolute top-0 right-0 text-sm tracking-[0.2em] text-[#94A3B8]/40 font-mono font-semibold">
          0{index + 1}
        </span>

        <p className="pr-10 text-xs font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">
          {project.category}
        </p>

        <h3 className="mt-4 font-serif text-xl tracking-[0.05em] text-[#D4C5B0] transition-colors duration-300 group-hover:text-white md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-[#E2E8F0]/80">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-sm border border-[#2C353D] bg-[#0B0C0E]/70 px-3 py-1 text-xs font-medium tracking-[0.1em] text-[#E2E8F0]/70"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <span className="rounded-sm border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.2)]">
            {project.status}
          </span>
          <button
            type="button"
            onClick={() => onView(project)}
            aria-label={`View details for ${project.title}`}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#D4C5B0] transition-all duration-300 hover:text-[#00E5FF] hover:translate-x-0.5"
          >
            View Project <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default PortfolioCard

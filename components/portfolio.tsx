"use client"

import { motion } from "framer-motion"
import { PortfolioCard } from "./portfolio-card"

const projects = [
  {
    title: "AMB Resume Builder",
    description: "A premium, lightning-fast web utility engineered to craft professional-grade resumes.",
    link: "https://ambresumebuilder.vercel.app",
  },
  {
    title: "Fact Stack HQ",
    description: "A powerful social media automation engine designed to programmatically generate and distribute high-retention infographic content.",
    link: null,
  },
  {
    title: "Enterprise POS Infrastructure",
    description: "Standalone, secure point-of-sale software architectures built to streamline commercial operations.",
    link: null,
  },
  {
    title: "Media Automation Engines",
    description: "Custom-compiled desktop applications tailored for high-fidelity, automated voice and video pipeline generation.",
    link: null,
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] leading-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
          The Portfolio.
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

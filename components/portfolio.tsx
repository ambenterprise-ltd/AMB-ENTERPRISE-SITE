"use client"

import { useMemo, useState } from "react"
import { projects, projectFilters, type Project, type ProjectFilter } from "@/data/projects"
import { PortfolioCard } from "./portfolio-card"
import { ProjectModal } from "./project-modal"
import { SectionHeading } from "./section-heading"

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("ALL")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const filteredProjects = useMemo(
    () => activeFilter === "ALL" ? projects : projects.filter((project) => project.filters.includes(activeFilter)),
    [activeFilter],
  )

  return (
    <section id="portfolio" className="relative z-10 border-t border-[#2C353D] py-24 md:py-32">
      <SectionHeading
        eyebrow="THE PORTFOLIO"
        title="Systems We've Engineered."
        description="From business software to autonomous AI agents, every system begins with a real problem."
      />

      {/* Filter Buttons */}
      <div className="mt-10 flex flex-wrap gap-2.5" aria-label="Project filters">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`min-h-11 rounded-sm border px-5 py-2 text-xs md:text-sm font-semibold tracking-[0.16em] transition-all duration-300 ${
              activeFilter === filter
                ? "border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                : "border-[#2C353D] bg-[#1B1E23] text-[#E2E8F0]/70 hover:border-[#00E5FF]/50 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid with Center Breathing Divider Line */}
      <div className="relative mt-10">
        {/* Center Breathing Divider Line in Signature Turquoise */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-6 bottom-6 hidden -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent shadow-[0_0_16px_rgba(0,229,255,0.7)] animate-pulse md:block"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={index}
              onView={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Portfolio

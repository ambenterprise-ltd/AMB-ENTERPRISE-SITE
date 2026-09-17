"use client"

import { useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, X } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/80 p-3 backdrop-blur-md md:items-center md:p-6"
          onMouseDown={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            aria-describedby="project-dialog-description"
            tabIndex={-1}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-sm border border-[#2C353D] bg-[#1B1E23] p-6 shadow-2xl outline-none md:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">
                  {project.category}
                </p>
                <h2 id="project-dialog-title" className="mt-3 font-serif text-3xl tracking-[0.05em] text-[#D4C5B0] md:text-5xl">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-sm border border-[#2C353D] p-2.5 text-[#E2E8F0]/70 transition-colors hover:border-[#00E5FF] hover:text-[#00E5FF]"
                aria-label="Close project details"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-sm border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                {project.status}
              </span>
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-sm border border-[#2C353D] bg-[#0B0C0E]/70 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-[#E2E8F0]/80"
                >
                  {technology}
                </span>
              ))}
            </div>

            <p id="project-dialog-description" className="mt-8 max-w-3xl text-lg leading-relaxed text-[#E2E8F0]/90">
              {project.description}
            </p>

            <div className="mt-10 grid gap-8 border-y border-[#2C353D] py-8 md:grid-cols-2">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">THE PROBLEM</p>
                <p className="mt-4 text-base leading-relaxed text-[#E2E8F0]/80">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">THE SYSTEM</p>
                <p className="mt-4 text-base leading-relaxed text-[#E2E8F0]/80">{project.system}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">KEY CAPABILITIES</p>
                <ul className="mt-4 space-y-3">
                  {project.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-3 text-base text-[#E2E8F0]/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00E5FF]" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">ARCHITECTURE</p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {project.architecture.map((step, index) => (
                    <span key={step} className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[#E2E8F0]/80">
                      <span className="rounded-sm border border-[#2C353D] bg-[#0B0C0E]/70 px-3 py-1.5">{step}</span>
                      {index < project.architecture.length - 1 && <ArrowUpRight className="h-4 w-4 text-[#00E5FF]/60" />}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-sm border border-[#D4C5B0] bg-transparent px-10 py-4 text-sm md:text-base font-semibold tracking-[0.16em] text-[#D4C5B0] transition-all duration-300 hover:bg-[#D4C5B0] hover:text-[#0B0C0E]"
              >
                VIEW LIVE PROJECT <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

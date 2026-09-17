"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const steps = [
  ["01", "Understand", "We analyze the problem, users, workflow, and operational requirements."],
  ["02", "Architect", "We design the system architecture, data flow, integrations, and technical foundation."],
  ["03", "Build", "We develop the software, AI components, interfaces, and automation engines."],
  ["04", "Integrate", "APIs, databases, AI models, external platforms, and internal systems are connected."],
  ["05", "Automate", "Repetitive processes are transformed into reliable, repeatable workflows."],
  ["06", "Deploy", "The finished system is tested, deployed, and prepared for real-world use."],
]

export function EngineeringProcess() {
  return (
    <section id="process" className="relative z-10 border-t border-[#2C353D] py-24 md:py-32">
      <SectionHeading
        eyebrow="ENGINEERING PROCESS"
        title="From Problem to System."
        description="A disciplined, repeatable engineering methodology executed across all client deployments."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([number, title, description], index) => (
          <motion.article
            key={number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="min-h-52 rounded-sm border border-[#2C353D] bg-[#1B1E23] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8B5]/50 hover:shadow-[0_10px_25px_rgba(0,168,181,0.1)] md:p-8"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-[#00A8B5] font-mono">{number}</p>
            <h3 className="mt-6 font-serif text-2xl tracking-[0.05em] text-[#D4C5B0]">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[#E2E8F0]/80">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default EngineeringProcess

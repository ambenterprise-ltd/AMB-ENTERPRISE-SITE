"use client"

import { motion } from "framer-motion"
import { services } from "@/data/services"
import { SectionHeading } from "./section-heading"

export function Services() {
  return (
    <section id="services" className="relative z-10 border-t border-[#2C353D] py-24 md:py-32">
      <SectionHeading
        eyebrow="CORE SERVICES"
        title="Systems Built for Work That Matters."
        description="We don't just build apps. We engineer systems that automate work."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-sm border border-[#2C353D] bg-[#1B1E23] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00A8B5]/50 hover:shadow-[0_10px_30px_rgba(0,168,181,0.12)] lg:p-8"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-[#00A8B5]/5 to-transparent" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex p-3.5 rounded-sm bg-[#0B0C0E] border border-[#2C353D] text-[#00A8B5] group-hover:border-[#00A8B5]/40 transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="mb-4 font-serif text-xl tracking-[0.05em] text-[#D4C5B0] transition-colors duration-300 group-hover:text-white md:text-2xl">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-[#E2E8F0]/80 md:text-lg">
                {service.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-[#2C353D] bg-[#0B0C0E]/70 px-3 py-1.5 text-xs font-medium tracking-[0.12em] text-[#D4C5B0] rounded-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services

"use client"

import { motion } from "framer-motion"
import { Cpu, CreditCard, Monitor, LayoutTemplate } from "lucide-react"

const services = [
  {
    title: "Custom Automation Engines",
    description: "High-fidelity, automated voice and video pipeline generation tailored to dramatically scale content distribution and operational efficiency.",
    icon: Cpu,
  },
  {
    title: "POS Infrastructure",
    description: "Standalone, secure point-of-sale software architectures built to streamline commercial operations with uncompromising reliability.",
    icon: CreditCard,
  },
  {
    title: "Desktop Application Engineering",
    description: "High-performance desktop applications engineered in Python and C++, designed for complex computations and elegant user experiences.",
    icon: Monitor,
  },
  {
    title: "Web Architectures",
    description: "Premium, lightning-fast web utilities and responsive digital platforms built on cutting-edge frameworks for maximum impact.",
    icon: LayoutTemplate,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative z-10 border-t border-white/5">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] leading-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
          Core Services.
        </h2>
        <p className="mt-4 text-[#D1D5DB] text-sm md:text-base uppercase tracking-[0.2em]">
          Precision Engineering for the Digital Era
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative p-8 lg:p-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/5 transition-all duration-500 hover:border-[#BF953F]/30 hover:bg-black/60"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-b from-[#BF953F]/5 to-transparent" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-[#BF953F] group-hover:text-[#FCF6BA] group-hover:bg-[#BF953F]/10 transition-colors duration-500">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.05em] text-white mb-4 group-hover:text-[#FCF6BA] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { motion, type Variants } from "framer-motion"

const textLines = [
  "AMB Enterprise is a technology-focused engineering studio building intelligent software, automation systems, and digital products for real-world workflows.",
  "Our work spans AI agents, business software, automation engines, content systems, web applications, and desktop tools. We focus on turning complicated manual processes into structured, reliable software systems.",
]

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const lineVariants: Variants = {
  hidden: { 
    y: 40, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function About() {
  return (
    <section id="about" className="relative z-10 border-t border-[#2C353D] py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] leading-tight text-[#D4C5B0]">
            Built Around Problems Worth Solving.
          </h2>
        </motion.div>

        {/* Right - Description with staggered text reveal */}
        <div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="overflow-hidden"
          >
            {textLines.map((line, index) => (
              <div key={index} className="overflow-hidden last:mt-6">
                <motion.p
                  variants={lineVariants}
                  className="font-sans text-lg leading-relaxed text-[#E2E8F0]/80 md:text-xl"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </motion.div>
          
          {/* Decorative line */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#00A8B5] to-transparent" />
            <span className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#00A8B5]/80">AI • Automation • Software</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

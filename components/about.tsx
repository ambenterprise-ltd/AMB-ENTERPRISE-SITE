"use client"

import { motion } from "framer-motion"

const textLines = [
  "At AMB Enterprise, we engineer sophisticated digital architecture.",
  "From high-performance desktop applications in Python and C++",
  "to seamless web automation, we bridge the gap between",
  "complex infrastructure and elegant user experiences.",
  "We are driven by a singular philosophy: precision, innovation,",
  "and an uncompromising commitment to being your trustful",
  "companion in the digital era.",
]

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const lineVariants = {
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
    <section id="about" className="py-32 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] leading-tight bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
            Engineering
            <br />
            Excellence.
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
              <div key={index} className="overflow-hidden">
                <motion.p
                  variants={lineVariants}
                  className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed font-sans"
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
            className="mt-10 flex items-center gap-4"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-[#BF953F] to-transparent" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#BF953F]/60">Est. 2024</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

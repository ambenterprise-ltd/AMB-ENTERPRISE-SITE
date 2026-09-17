"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { Braces, Cpu, Workflow } from "lucide-react"

function EnergyPulseConnector() {
  return (
    <div className="px-4 py-0.5">
      <div className="flex w-12 justify-center">
        <div className="relative h-6 w-[2px] overflow-hidden rounded-full bg-[#2C353D]">
          <motion.div
            className="absolute inset-x-0 h-4 w-full rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function SystemMapCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Weighted smooth physics spring
  const springConfig = {
    damping: 28,
    stiffness: 80,
    mass: 0.6,
  }

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig)

  // Dynamic glare highlight following mouse coordinates with subtle teal accent
  const glarePercentX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, 85]), springConfig)
  const glarePercentY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, 85]), springConfig)
  const glareBackground = useMotionTemplate`radial-gradient(450px circle at ${glarePercentX}% ${glarePercentY}%, rgba(0,168,181,0.12), transparent 65%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      style={{ perspective: 1000, contain: "paint" }}
      className="mx-auto w-full max-w-lg lg:max-w-none isolate"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative overflow-hidden rounded-sm border border-[#2C353D] bg-[#1B1E23] p-7 md:p-9 backdrop-blur-md transition-shadow duration-500 hover:border-[#00A8B5]/50 hover:shadow-[0_0_40px_rgba(0,168,181,0.18)]"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,53,61,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(44,53,61,0.3)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Dynamic cursor glare */}
        <motion.div
          style={{ background: glareBackground }}
          className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* 3D Elevated UI Content */}
        <div
          style={{
            transform: "translateZ(28px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 w-full"
        >
          {/* Header with Terminal "Live Status" Exception */}
          <div className="flex items-center justify-between border-b border-[#2C353D] pb-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C5B0] md:text-sm">
              SYSTEM MAP
            </span>

            {/* Terminal Live Status Badge: Pure black #000000 background + Turquoise #00E5FF */}
            <div className="flex items-center gap-2 rounded-sm border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-3 py-1.5 shadow-[0_0_12px_rgba(0,229,255,0.2)]">
              <span className="text-[0.68rem] tracking-[0.15em] text-[#00E5FF] uppercase font-mono font-bold">
                LIVE PIPELINE
              </span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
              </span>
            </div>
          </div>

          {/* Workflow Pipeline */}
          <div className="mt-8 space-y-1">
            {/* Step 1: INPUT */}
            <div className="group/item flex items-center justify-between rounded-sm border border-[#2C353D] bg-[#0B0C0E] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A8B5]/50 hover:bg-[#1B1E23]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-[#00A8B5]/40 bg-[#00A8B5]/10 text-[#00A8B5] transition-transform duration-300 group-hover/item:scale-105">
                  <Cpu className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#00A8B5]">INPUT</p>
                  <p className="mt-0.5 text-base font-medium text-[#E2E8F0]">Real-world workflow</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#D4C5B0]/60 tracking-[0.1em]">01</span>
            </div>

            {/* Laser Pulse Connector */}
            <EnergyPulseConnector />

            {/* Step 2: ENGINEERING */}
            <div className="group/item flex items-center justify-between rounded-sm border border-[#2C353D] bg-[#0B0C0E] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A8B5]/50 hover:bg-[#1B1E23]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-[#00A8B5]/40 bg-[#00A8B5]/10 text-[#00A8B5] transition-transform duration-300 group-hover/item:scale-105">
                  <Braces className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#00A8B5]">ENGINEERING</p>
                  <p className="mt-0.5 text-base font-medium text-[#E2E8F0]">Software + intelligence</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#D4C5B0]/60 tracking-[0.1em]">02</span>
            </div>

            {/* Laser Pulse Connector */}
            <EnergyPulseConnector />

            {/* Step 3: OUTPUT */}
            <div className="group/item flex items-center justify-between rounded-sm border border-[#2C353D] bg-[#0B0C0E] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A8B5]/50 hover:bg-[#1B1E23]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-[#00A8B5]/40 bg-[#00A8B5]/10 text-[#00A8B5] transition-transform duration-300 group-hover/item:scale-105">
                  <Workflow className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#00A8B5]">OUTPUT</p>
                  <p className="mt-0.5 text-base font-medium text-[#E2E8F0]">Scalable system</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#D4C5B0]/60 tracking-[0.1em]">03</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SystemMapCard

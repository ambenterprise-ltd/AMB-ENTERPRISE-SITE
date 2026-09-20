"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Cpu, Braces, Workflow } from "lucide-react"

function LaserConduit() {
  return (
    <div className="relative ml-9 h-7 w-[2px] overflow-hidden rounded-full bg-white/10">
      <motion.div
        className="absolute inset-x-0 h-3.5 w-full rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
        animate={{
          y: ["-100%", "200%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

export function SystemMapCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [canTilt, setCanTilt] = useState(false)

  useEffect(() => {
    // Only enable 3D perspective tilt on desktop pointer devices
    setCanTilt(window.matchMedia("(pointer: fine)").matches)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 80, mass: 0.6 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canTilt || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    if (!canTilt) return
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div style={{ perspective: canTilt ? 1000 : "none" }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={canTilt ? handleMouseMove : undefined}
        onMouseLeave={canTilt ? handleMouseLeave : undefined}
        style={{
          rotateX: canTilt ? rotateX : 0,
          rotateY: canTilt ? rotateY : 0,
          transformStyle: canTilt ? "preserve-3d" : "flat",
          willChange: canTilt ? "transform" : "auto",
        }}
        className="relative overflow-hidden rounded-2xl border border-[#00E5FF]/20 bg-[#0c0c0c] p-6 md:p-8 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
      >
        {/* Subtle Circuit Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Card Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00E5FF] md:text-sm">
              SYSTEM MAP
            </span>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-3 py-1 text-[11px] font-medium tracking-wider text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.3)]">
              LIVE PIPELINE
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Pipeline Nodes */}
          <div className="mt-6 flex flex-col gap-2">
            {/* Step 1: INPUT */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#121212] p-4 transition-all hover:border-[#00E5FF]/30">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Cpu className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#00E5FF]">INPUT</p>
                  <p className="mt-0.5 text-sm font-medium text-white">Real-world workflow</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500">01</span>
            </div>

            {/* Traveling Laser Conduit 1 */}
            <LaserConduit />

            {/* Step 2: ENGINEERING */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#121212] p-4 transition-all hover:border-[#00E5FF]/30">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Braces className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#00E5FF]">ENGINEERING</p>
                  <p className="mt-0.5 text-sm font-medium text-white">Software + intelligence</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500">02</span>
            </div>

            {/* Traveling Laser Conduit 2 */}
            <LaserConduit />

            {/* Step 3: OUTPUT */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-[#121212] p-4 transition-all hover:border-[#00E5FF]/30">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Workflow className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#00E5FF]">OUTPUT</p>
                  <p className="mt-0.5 text-sm font-medium text-white">Scalable system</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-500">03</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SystemMapCard

"use client"

import Image from "next/image"

interface AMBLogoProps {
  className?: string
  height?: number
  showText?: boolean
}

export function AMBLogo({ className = "", height = 52, showText = false }: AMBLogoProps) {
  // Logo is naturally 662x387 (~1.71:1 ratio)
  const width = Math.round(height * 1.71)

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <Image
        src="/amb-logo.png"
        alt="AMB Enterprise Logo"
        width={width}
        height={height}
        className="object-contain shrink-0"
        priority
      />

      {showText && (
        <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.08em] text-[#D4C5B0] transition-colors duration-300 hover:text-white">
          AMB Enterprise
        </span>
      )}
    </div>
  )
}

export default AMBLogo

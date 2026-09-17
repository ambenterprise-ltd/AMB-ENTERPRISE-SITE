"use client"

import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Terminal,
  Bot,
  Sparkles,
  Workflow,
  Server,
  Film,
  Monitor,
  Radio,
  FileCode,
  Blocks,
  Flame,
  Zap,
  GitBranch,
  Layout,
  Palette,
} from "lucide-react"

// Row 1: Core Programming Languages & Modern Web
const row1 = [
  { name: "Python", icon: Terminal },
  { name: "TypeScript", icon: FileCode },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML5", icon: Layout },
  { name: "CSS3", icon: Palette },
  { name: "C#", icon: Blocks },
  { name: "C++", icon: Cpu },
  { name: "Next.js", icon: Globe },
  { name: "React", icon: Code2 },
]

// Row 2: Developer Tooling, Frameworks & Desktop Systems
const row2 = [
  { name: "Git", icon: GitBranch },
  { name: "Node.js", icon: Cpu },
  { name: "Electron", icon: Monitor },
  { name: "Tailwind CSS", icon: Flame },
  { name: "REST APIs", icon: Server },
  { name: "Databases", icon: Database },
  { name: "Vercel", icon: Zap },
  { name: "WebSockets", icon: Radio },
]

// Row 3: AI Intelligence, Media Processing & Automation
const row3 = [
  { name: "AI Agents", icon: Bot },
  { name: "LLMs", icon: Sparkles },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "Automation Engines", icon: Workflow },
  { name: "Data Pipelines", icon: Layers },
  { name: "FFmpeg", icon: Film },
  { name: "Edge-TTS", icon: Radio },
  { name: "Video Processing", icon: Film },
]

function MarqueeTrack({
  items,
  reverse = false,
  duration = 35,
}: {
  items: { name: string; icon: React.ComponentType<{ className?: string }> }[]
  reverse?: boolean
  duration?: number
}) {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className="relative z-10 flex overflow-hidden select-none py-2.5">
      <div
        className={`flex shrink-0 items-center gap-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${duration}s`,
          willChange: "transform",
        }}
      >
        {repeated.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.name}-${idx}`}
              className="inline-flex shrink-0 items-center gap-4 rounded-sm border border-[#2C353D] bg-[#1B1E23] px-8 py-4.5 md:py-5 transition-all duration-200 hover:scale-105 hover:border-[#00E5FF]/60 hover:bg-[#1B1E23] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] cursor-default"
            >
              <Icon className="h-6 w-6 shrink-0 text-[#00E5FF]" />
              <span className="text-base md:text-lg font-semibold tracking-wide text-white/95">
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TechnologyStack() {
  return (
    <section id="technology" className="relative z-10 overflow-hidden py-24 md:py-32">
      {/* Section Header */}
      <div className="relative z-10 mb-14 text-left">
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-[#00E5FF] md:text-sm">
          TECHNOLOGY
        </p>
        <h2 className="font-serif text-4xl font-normal leading-tight text-[#D4C5B0] sm:text-5xl md:text-6xl">
          Technologies Behind the<br />Systems.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#E2E8F0]/80 md:text-lg">
          The tools, frameworks, and engineering disciplines used across AMB projects.
        </p>
      </div>

      {/* Marquee Rows with Zero-Cost Edge Fades */}
      <div className="relative z-10 flex flex-col gap-6 overflow-hidden">
        {/* Left Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 md:w-32 bg-gradient-to-r from-[#0B0C0E] to-transparent" />

        {/* Right Edge Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 md:w-32 bg-gradient-to-l from-[#0B0C0E] to-transparent" />

        {/* Row 1: Left to Right */}
        <MarqueeTrack duration={32} items={row1} reverse={true} />

        {/* Row 2: Right to Left */}
        <MarqueeTrack duration={38} items={row2} reverse={false} />

        {/* Row 3: Left to Right */}
        <MarqueeTrack duration={34} items={row3} reverse={true} />
      </div>
    </section>
  )
}

export default TechnologyStack

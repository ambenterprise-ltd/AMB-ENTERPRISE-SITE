export type ProjectFilter =
  | "ALL"
  | "AI & AGENTS"
  | "AUTOMATION"
  | "BUSINESS"
  | "WEB"
  | "DESKTOP"
  | "MEDIA"
  | "LEGAL TECH"

export type ProjectStatus = "BUILT" | "LIVE" | "IN DEVELOPMENT"

export interface Project {
  title: string
  category: string
  description: string
  status: ProjectStatus
  filters: ProjectFilter[]
  technologies: string[]
  problem: string
  system: string
  capabilities: string[]
  architecture: string[]
  href?: string
  hidden?: boolean
}

export const projectFilters: ProjectFilter[] = [
  "ALL",
  "AI & AGENTS",
  "AUTOMATION",
  "BUSINESS",
  "WEB",
  "DESKTOP",
  "MEDIA",
  "LEGAL TECH",
]

export const allProjects: Project[] = [
  {
    title: "Legal Videos Agent",
    category: "AI / LEGAL TECHNOLOGY / AUTOMATION",
    description:
      "A specialized autonomous video engine designed for lawyers and legal professionals to build and maintain their digital authority on social media through automated legal research, script drafting, and branded video production.",
    status: "IN DEVELOPMENT",
    filters: ["AI & AGENTS", "AUTOMATION", "MEDIA", "LEGAL TECH"],
    technologies: ["LEGAL TECH", "SOCIAL MEDIA", "AI VIDEO", "AUTOMATION"],
    problem:
      "Legal education requires dependable research, clear language, and a repeatable way to turn complex source material into useful public content.",
    system:
      "A staged content system that moves legal knowledge through research, scripting, voice, video, subtitle, branding, and distribution preparation.",
    capabilities: [
      "Legal knowledge research workflows",
      "Urdu educational script generation",
      "Branded short-form video preparation",
      "Subtitle and social distribution preparation",
    ],
    architecture: [
      "LEGAL KNOWLEDGE",
      "AI RESEARCH",
      "SCRIPT ENGINE",
      "URDU VOICE",
      "VIDEO PIPELINE",
      "SUBTITLE ENGINE",
      "LAW FIRM BRANDING",
      "SOCIAL DISTRIBUTION",
    ],
  },
  {
    title: "FactStack HQ",
    category: "AI / AUTOMATION / CONTENT",
    description:
      "An automated content intelligence system designed to gather information, process data, and transform research into structured social media content.",
    status: "BUILT",
    filters: ["AI & AGENTS", "AUTOMATION", "MEDIA"],
    technologies: ["AI", "DATA PROCESSING", "AUTOMATION", "CONTENT SYSTEMS"],
    problem:
      "Research-led content can be slow to collect, organize, and turn into a consistent publishing workflow.",
    system:
      "A content intelligence system that captures inputs, processes information, and shapes research into structured social content.",
    capabilities: [
      "Information gathering", "Research processing", "Structured content creation", "Automated content workflows",
    ],
    architecture: ["SOURCE INPUTS", "DATA PROCESSING", "CONTENT INTELLIGENCE", "PUBLISHING OUTPUT"],
  },
  {
    title: "AMB Enterprise POS",
    category: "BUSINESS SOFTWARE / DESKTOP",
    description:
      "A complete modern point-of-sale system built for retail environments with business workflows, dynamic interfaces, billing, and PDF generation.",
    status: "BUILT",
    filters: ["BUSINESS", "DESKTOP"],
    technologies: ["DESKTOP SOFTWARE", "BILLING", "PDF", "BUSINESS WORKFLOWS"],
    problem:
      "Retail teams need a reliable local system that brings billing and everyday operational work into a single workflow.",
    system:
      "A desktop point-of-sale system combining retail workflows, dynamic interfaces, billing, and document generation.",
    capabilities: ["Retail billing", "Business workflows", "Dynamic interfaces", "PDF generation"],
    architecture: ["RETAIL WORKFLOW", "POS INTERFACE", "BILLING ENGINE", "PDF OUTPUT"],
  },
  {
    title: "Social Agent Pro",
    category: "AI / SOCIAL AUTOMATION / MEDIA",
    description:
      "An automated content production and distribution engine designed to transform source material into short-form videos and distribute content across social platforms.",
    status: "BUILT",
    filters: ["AI & AGENTS", "AUTOMATION", "MEDIA"],
    technologies: ["AI", "VIDEO", "AUTOMATION", "SOCIAL PUBLISHING"],
    problem:
      "Producing and distributing frequent social videos can demand repetitive manual work across several disconnected steps.",
    system:
      "An automated production engine that transforms source material into short-form social video outputs.",
    capabilities: ["Source processing", "Short-form video generation", "Distribution workflows", "Repeatable production"],
    architecture: ["SOURCE MATERIAL", "CONTENT ENGINE", "VIDEO ASSEMBLY", "SOCIAL DISTRIBUTION"],
  },
  {
    title: "Islamic Reels Studio",
    category: "AI / MEDIA / AUTOMATION",
    description:
      "An automated Islamic content production system designed to streamline the creation of structured short-form video content.",
    status: "BUILT",
    filters: ["AI & AGENTS", "AUTOMATION", "MEDIA"],
    technologies: ["AI", "VIDEO", "AUTOMATION", "CONTENT SYSTEMS"],
    problem:
      "Creating organized, repeatable short-form content requires a workflow that can reduce manual production effort.",
    system:
      "A focused production system for moving structured content through a repeatable short-form video workflow.",
    capabilities: ["Structured content workflows", "Short-form video production", "Repeatable automation", "Media processing"],
    architecture: ["CONTENT INPUT", "STRUCTURE ENGINE", "VIDEO WORKFLOW", "REELS OUTPUT"],
  },
  {
    title: "AMB Long Form Agent",
    category: "AI / AGENTS / CONTENT",
    description:
      "An AI-powered long-form content generation system designed to research, structure, and produce extended video content with minimal manual intervention.",
    status: "BUILT",
    filters: ["AI & AGENTS", "AUTOMATION", "MEDIA"],
    technologies: ["AI AGENTS", "RESEARCH", "CONTENT SYSTEMS", "VIDEO"],
    problem:
      "Long-form content demands research, structure, and production coordination that is difficult to manage manually at scale.",
    system:
      "An AI-powered content system that coordinates research, structure, and extended video production steps.",
    capabilities: ["Research coordination", "Content structuring", "Long-form generation", "Reduced manual intervention"],
    architecture: ["RESEARCH", "AGENT WORKFLOW", "CONTENT STRUCTURE", "LONG-FORM OUTPUT"],
  },
  {
    title: "System Booster Pro",
    category: "DESKTOP / SYSTEM TOOLS",
    description:
      "A C# Windows utility designed to optimize system performance, clean unnecessary files, and streamline system resources.",
    status: "BUILT",
    filters: ["DESKTOP"],
    technologies: ["C#", "WINDOWS", "SYSTEM UTILITIES", "DESKTOP SOFTWARE"],
    problem:
      "Everyday Windows maintenance can leave users with unnecessary files and poorly managed system resources.",
    system:
      "A C# desktop utility for system cleanup and performance-focused resource management.",
    capabilities: ["System cleanup", "Performance support", "Resource streamlining", "Windows utility workflows"],
    architecture: ["WINDOWS ENVIRONMENT", "SYSTEM SCAN", "CLEANUP ACTIONS", "RESOURCE OPTIMIZATION"],
  },
  {
    title: "Horror Videos Agent",
    category: "AI / AUTOMATION / ENTERTAINMENT",
    description:
      "An automated dark-narrative pipeline engineered to generate immersive horror storytelling, sound design, visual atmosphere, and synchronized multi-platform video delivery.",
    status: "BUILT",
    filters: ["AI & AGENTS", "AUTOMATION", "MEDIA"],
    technologies: ["PYTHON", "FFMPEG", "VOICE AI", "AUTOMATION"],
    problem:
      "Short-form entertainment production benefits from a repeatable system for processing and assembling content.",
    system:
      "An automated pipeline that prepares source material and assembles it into short-form entertainment videos.",
    capabilities: ["Media processing", "Video assembly", "Repeatable workflow", "Short-form output"],
    architecture: ["SOURCE MATERIAL", "PROCESSING PIPELINE", "VIDEO ASSEMBLY", "ENTERTAINMENT OUTPUT"],
  },
  {
    title: "AMB Resume Builder",
    category: "WEB / PRODUCTIVITY",
    description:
      "A modern resume-generation platform designed to help users create professional resumes through a streamlined web experience.",
    status: "LIVE",
    filters: ["WEB"],
    technologies: ["WEB APPLICATION", "DOCUMENT GENERATION", "PRODUCTIVITY"],
    problem:
      "Professional resume creation should be clearer and more approachable than assembling a document from scratch.",
    system:
      "A streamlined web application that guides users through creating professional resumes.",
    capabilities: ["Resume creation", "Guided web experience", "Professional document output", "Productivity workflow"],
    architecture: ["USER INPUT", "RESUME BUILDER", "DOCUMENT GENERATION", "PROFESSIONAL OUTPUT"],
    href: "https://ambresumebuilder.vercel.app",
  },
  {
    title: "Katchery Lawyer Platform",
    category: "LEGAL TECH / BUSINESS SOFTWARE",
    description:
      "A database-driven legal document management and tracking platform designed for lawyers handling property and registration documentation.",
    status: "IN DEVELOPMENT",
    filters: ["BUSINESS", "LEGAL TECH"],
    technologies: ["DATABASE SYSTEMS", "DOCUMENT MANAGEMENT", "LEGAL TECH", "BUSINESS SOFTWARE"],
    problem:
      "Property and registration documentation requires a dependable way for legal teams to organize records and follow work in progress.",
    system:
      "A database-driven platform for managing legal documents and tracking property and registration work.",
    capabilities: ["Document management", "Case tracking", "Database-driven workflows", "Legal records organization"],
    architecture: ["LEGAL RECORDS", "DATABASE", "TRACKING WORKFLOW", "DOCUMENT MANAGEMENT"],
    hidden: true,
  },
]

// Only visible, active projects are exported for the portfolio grid and views
export const projects: Project[] = allProjects.filter((p) => !p.hidden)

import type { LucideIcon } from "lucide-react"
import { Bot, Clapperboard, Code2, DatabaseZap, MonitorCog, Workflow } from "lucide-react"

export interface Service {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: "AI Agents & Intelligent Systems",
    description: "Build software that researches, reasons, processes information, and executes multi-step workflows.",
    features: ["AI Research Agents", "LLM Integration", "Autonomous Workflows", "Knowledge Systems", "Multi-Step Agents", "API Integration"],
    icon: Bot,
  },
  {
    title: "Business Automation",
    description: "Turn repetitive business operations into reliable automated workflows.",
    features: ["Workflow Automation", "Data Processing", "API Automation", "Scheduled Tasks", "Reporting", "Document Processing"],
    icon: Workflow,
  },
  {
    title: "AI Video & Content Automation",
    description: "Build systems that transform ideas and source material into publish-ready digital content.",
    features: ["AI Scripts", "AI Voice", "Video Assembly", "Subtitles", "Branding", "Social Publishing"],
    icon: Clapperboard,
  },
  {
    title: "Custom Business Software",
    description: "Software engineered around the actual workflow of your business.",
    features: ["POS Systems", "CRM", "Inventory", "Dashboards", "Document Management", "Customer Tracking"],
    icon: DatabaseZap,
  },
  {
    title: "Web Applications",
    description: "Modern web products designed around real users, workflows, and business requirements.",
    features: ["Web Apps", "Dashboards", "Customer Portals", "Admin Panels", "SaaS", "API-Driven Systems"],
    icon: Code2,
  },
  {
    title: "Desktop Engineering",
    description: "Powerful local software for Windows environments and specialized workflows.",
    features: ["Python Applications", "C# Applications", "System Utilities", "Offline Software", "PDF Generation", "Local Automation"],
    icon: MonitorCog,
  },
]

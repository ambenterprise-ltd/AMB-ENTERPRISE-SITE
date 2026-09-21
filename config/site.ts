export const siteConfig = {
  name: "AMB Enterprise Ltd",
  description:
    "Official portal of AMB Enterprise Ltd - business software, enterprise solutions, and management services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ambenterpriseltd.vercel.app",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com/ambenterprise-ltd",
  },
  keywords: [
    "AMB Enterprise Ltd",
    "AI Agents",
    "Autonomous Systems",
    "Workflow Automation",
    "Enterprise Software",
    "Business Software",
    "Enterprise Solutions",
    "Management Services",
    "Custom Software Engineering",
    "Digital Transformation",
    "Next.js",
  ],
}

export function absoluteUrl(path: string = ''): string {
  const base = siteConfig.url.replace(/\/+$/, '')
  if (!path || path === '/') return base
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${cleanPath}`
}

export type SiteConfig = typeof siteConfig

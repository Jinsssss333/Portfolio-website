export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  tags: string[]
  href: string
  accentColor: string
  gradient: string
  overview: string
  status: string
  highlight?: string
  demoHref?: string
}

// Project descriptions follow their public READMEs; the ByteFix result is from
// Jins's résumé. OpenTelemetry links directly to the merged contribution.
export const projects: Project[] = [
  {
    id: "sunocare",
    title: "SunoCare",
    tagline: "Health reporting through a phone call",
    category: "Voice AI / Healthcare",
    tags: ["Python", "FastAPI", "React", "Exotel", "Gnani AI"],
    href: "https://github.com/Jinsssss333/Suno_Care",
    accentColor: "#995F2F",
    gradient: "from-orange-500/25 to-amber-400/20",
    overview: "Co-developed a voice-based reporting prototype for frontline health workers. Guided calls in Hindi and English turn spoken visit reports into structured records, with read-back confirmation and a supervisor dashboard.",
    status: "Prototype",
    highlight: "Built for the Great Indian AI Internship Challenge by Gnani AI.",
    demoHref: "https://drive.google.com/file/d/1YZRIpJ7qBws_EAM1EDCYTT54nE4FwfzI/view",
  },
  {
    id: "bytefix",
    title: "ByteFix",
    tagline: "From runtime failures to reviewed fixes",
    category: "AI / Developer Tools",
    tags: ["Python", "Celery", "LLMs", "pytest"],
    href: "https://github.com/Jinsssss333/Byte-Fix",
    accentColor: "#978F66",
    gradient: "from-stone-400/25 to-yellow-500/20",
    overview: "Co-developed with Team Bytes, ByteFix captures Python service failures, generates reproducer tests and patches, and checks them in an isolated sandbox before preparing a pull request for human review.",
    status: "Hackathon project",
    highlight: "Second place, Software Track — Hack Day Kochi 1.0 at CITTIC CUSAT, October 2026.",
  },
  {
    id: "brightloop",
    title: "Brightloop",
    tagline: "The full subscription lifecycle",
    category: "Full-Stack / Business Systems",
    tags: ["TypeScript", "React", "Express", "Prisma", "PostgreSQL"],
    href: "https://github.com/Jinsssss333/sub_system",
    accentColor: "#E9C46A",
    gradient: "from-yellow-500/25 to-amber-300/20",
    overview: "Co-developed a subscription management platform covering product catalogs, recurring billing, payments, and reporting. Role-based access and duplicate-invoice protection support the core business workflows.",
    status: "Hackathon project",
    highlight: "Built for the Odoo Hackathon.",
  },
  {
    id: "hilite-lms",
    title: "HiLITE LMS",
    tagline: "A backend for real estate lead management",
    category: "Backend / CRM",
    tags: ["PHP", "Laravel", "MySQL", "REST APIs"],
    href: "https://github.com/Jinsssss333/Hilite_LMS",
    accentColor: "#25D366",
    gradient: "from-green-500/25 to-lime-400/20",
    overview: "Contributed to a multi-tenant lead management system for HiLITE Group during my completed Meridian internship. The backend covers lead intake, company-level data isolation, role-based access, activity tracking, and SLA monitoring.",
    status: "Internship project",
    highlight: "Meridian Solutions Inc · June 2026.",
  },
  {
    id: "opentelemetry",
    title: "OpenTelemetry",
    tagline: "Contributing to the Python ecosystem",
    category: "Open Source / Documentation",
    tags: ["Python", "Sphinx", "Documentation"],
    href: "https://github.com/open-telemetry/opentelemetry-python/pull/5428",
    accentColor: "#6A9FB5",
    gradient: "from-blue-500/25 to-cyan-400/20",
    overview: "Improved the OpenTelemetry Python documentation by replacing plain source URLs with Sphinx links in the auto-instrumentation and SQLCommenter examples, making their source files easier to reach.",
    status: "Merged contribution",
    highlight: "Pull request #5428 merged into OpenTelemetry Python.",
  },
]

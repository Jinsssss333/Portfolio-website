"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Code2,
  Cpu,
  Layers,
  MapPin,
  Globe,
  Terminal,
  CheckCircle2,
} from "lucide-react"
import { SITE } from "@/lib/site"

const TECH_CATEGORIES = [
  { id: "backend", label: "Backend & Data", icon: <Globe size={18} />, description: "APIs, data models, and the business rules behind an application.", skills: ["Python", "PHP", "FastAPI", "Laravel", "Node.js", "Express.js", "PostgreSQL", "MySQL", "SQLite", "Redis", "Prisma"] },
  { id: "frontend", label: "Interfaces", icon: <Layers size={18} />, description: "Interfaces for the systems I build.", skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Vite"] },
  { id: "ai", label: "AI & Automation", icon: <Cpu size={18} />, description: "Practical AI integrations, from voice reporting to debugging tools.", skills: ["Gemini", "Gnani AI", "Exotel", "LLM Integration", "Python", "Celery", "pytest"] },
  { id: "tools", label: "Tools & Foundations", icon: <Terminal size={18} />, description: "The tools and fundamentals I use to build, test, and collaborate.", skills: ["Java", "C", "C++", "Git", "GitHub", "Docker", "Linux", "Postman", "REST APIs", "Sphinx"] },
]
const PRINCIPLES = [
  { num: "01", title: "Understand the problem first", desc: "Start with the people, workflows, and constraints before choosing an implementation." },
  { num: "02", title: "Make reliability part of the design", desc: "Think through validation, permissions, failure states, and tests alongside the happy path." },
  { num: "03", title: "Build, learn, and share", desc: "Small experiments and open-source contributions are how I keep learning from real software." },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("backend")

  return (
    <div className="relative w-full overflow-hidden" style={{ fontFamily: "var(--font-google-sans-flex), sans-serif" }}>
      {/* ─── Hero / Bio Overview ────────────────────────────────────────────────── */}
      <section className="px-5 pt-32 pb-16 md:px-12 md:pt-40 md:pb-24 max-w-[1600px] mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs font-semibold tracking-wider uppercase text-accent mb-6">
            <Code2 size={14} aria-hidden /> JINS JOSE · Software Developer
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
            Curiosity, turned into working software.
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-foreground/70">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-foreground/15 bg-surface/30">
              <MapPin size={14} className="text-accent" aria-hidden /> {SITE.location}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-foreground/15 bg-surface/30">
              <Terminal size={14} className="text-accent" aria-hidden /> Backend · AI · Open Source
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-foreground/15 bg-surface/30">
              <CheckCircle2 size={14} className="text-accent" aria-hidden /> SOE CUSAT · CSE
            </span>
          </div>

          <p className="mt-8 text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-3xl">
            I am JINS JOSE, a software developer focused on backend engineering, system design, and AI integration. I enjoy understanding how a system works, building something useful, and making it more reliable one iteration at a time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-semibold text-background hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Get in touch
            </Link>
            <Link
              href="/#work"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
            >
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Story & Philosophy ─────────────────────────────────────────────────── */}
      <section className="px-5 py-16 md:px-12 md:py-24 bg-foreground/[0.02] border-y border-foreground/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">[ Background &amp; Story ]</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Learning through real problems.
            </h2>
            <p className="mt-5 text-base text-foreground/75 leading-relaxed">
              My background is in Computer Science and Engineering at the School of Engineering, CUSAT (2024–2028). My work spans voice-based healthcare reporting, AI-assisted debugging, subscription billing, and lead management.
            </p>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed">
              In June 2026, I completed a software development internship at Meridian IT Solutions, contributing to HiLITE LMS with PHP and Laravel. I also contribute to open source, including a merged documentation improvement in OpenTelemetry Python.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">[ Engineering Principles ]</p>
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.num}
                className="rounded-2xl border border-foreground/10 bg-surface/30 p-5 sm:p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono font-bold text-accent px-2 py-0.5 rounded bg-accent/10 shrink-0">
                    {principle.num}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">{principle.title}</h3>
                    <p className="text-sm text-foreground/70 mt-1 leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Arsenal ──────────────────────────────────────────────────── */}
      <section className="px-5 py-16 md:px-12 md:py-24 max-w-[1600px] mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">[ Technical Arsenal ]</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tools, technologies &amp; competencies
          </h2>
          <p className="mt-3 text-base text-foreground/70">
            Languages and tools I have worked with across my projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-foreground/10 pb-4 mb-8">
          {TECH_CATEGORIES.map((cat) => {
            const active = activeTab === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-foreground text-background font-semibold shadow-sm"
                    : "border border-foreground/15 text-foreground/70 hover:border-foreground/30 hover:bg-foreground/5"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Active Tab Skills Grid */}
        {(() => {
          const current = TECH_CATEGORIES.find((c) => c.id === activeTab) || TECH_CATEGORIES[0]
          return (
            <div className="rounded-3xl border border-foreground/15 bg-surface/30 p-6 sm:p-10 backdrop-blur-sm">
              <div className="max-w-xl mb-6">
                <h3 className="text-2xl font-bold text-foreground">{current.label}</h3>
                <p className="text-sm text-foreground/70 mt-1">{current.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {current.skills.map((skill) => (
                  <div
                    key={skill}
                    className="p-3.5 rounded-xl border border-foreground/10 bg-background/50 flex items-center gap-2 text-sm text-foreground/85 font-medium hover:border-accent/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}
      </section>

      {/* ─── Bottom CTA Banner ──────────────────────────────────────────────────── */}
      <section className="px-5 py-16 md:px-12 md:py-24 border-t border-foreground/10 bg-surface/20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">[ Let&apos;s Build Together ]</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Let&apos;s exchange ideas.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 max-w-xl">
            Interested in one of my projects, open source, or building something together? Get in touch.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-semibold text-background hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Get in touch
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-foreground/60 mt-4">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

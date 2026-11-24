"use client"

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
  useScroll,
} from "framer-motion"
import { useState, useRef, useEffect, useCallback } from "react"
import { Code2, ExternalLink, Play } from "lucide-react"
import Link from "next/link"

import { projects, type Project } from "@/lib/projects"

// ─── Variants ─────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
} as const

const rowVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
} as const

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
} as const

// ─── Hover Portal (follows cursor) ───────────────────────────────────────────
function HoverPortal({
  project,
  mouseX,
  mouseY,
}: {
  project: Project | null
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
}) {
  const shouldReduceMotion = useReducedMotion()
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    setSize({ w: window.innerWidth, h: window.innerHeight })
    const fn = () => setSize({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener("resize", fn)
    return () => window.removeEventListener("resize", fn)
  }, [])

  const smoothX = useSpring(mouseX, { damping: 26, stiffness: 320, mass: 0.8 })
  const smoothY = useSpring(mouseY, { damping: 26, stiffness: 320, mass: 0.8 })

  const velX = useVelocity(mouseX)
  const velY = useVelocity(mouseY)
  const tiltY = useTransform(velX, [-600, 600], [12, -12])
  const tiltX = useTransform(velY, [-600, 600], [-12, 12])

  const relRotY = useTransform(mouseX, [0, size.w], [6, -6])
  const relRotX = useTransform(mouseY, [0, size.h], [6, -6])

  const zeroMotion = useMotionValue(0)
  const finalRotY = useSpring(shouldReduceMotion ? zeroMotion : tiltY, { stiffness: 280, damping: 22 })
  const finalRotX = useSpring(shouldReduceMotion ? zeroMotion : tiltX, { stiffness: 280, damping: 22 })
  const bgRotY = useSpring(shouldReduceMotion ? zeroMotion : relRotY, { stiffness: 180, damping: 26 })
  const bgRotX = useSpring(shouldReduceMotion ? zeroMotion : relRotX, { stiffness: 180, damping: 26 })

  if (!project) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block will-change-transform"
      style={{ x: smoothX, y: smoothY, rotateX: finalRotX, rotateY: finalRotY, translateX: "-50%", translateY: "-70%" }}
    >
      <motion.div
        style={{ rotateX: bgRotX, rotateY: bgRotY }}
        className={`w-72 rounded-2xl bg-gradient-to-br ${project.gradient} backdrop-blur-2xl border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.35)] p-6`}
      >
        {/* Status pill */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] px-2 py-0.5 rounded-full border"
            style={{ borderColor: project.accentColor + "60", color: project.accentColor }}
          >
            {project.status}
          </span>
        </div>

        <h4 className="font-bold text-lg text-foreground leading-tight mb-1">{project.title}</h4>
        <p className="text-xs text-foreground/60 font-mono mb-4 leading-relaxed">{project.overview}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-xs font-mono bg-foreground/8 border border-foreground/10 text-foreground/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        {/* Shimmer */}
        <motion.div
          animate={{ x: ["-110%", "210%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          className="absolute inset-0 w-16 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-[-18deg] rounded-2xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  )
}

// ─── Project Row ──────────────────────────────────────────────────────────────
function ProjectRow({
  project,
  isActive,
  onHover,
}: {
  project: Project
  isActive: boolean
  onHover: (id: string | null) => void
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={rowVariants}
      className={`group relative border-t border-foreground/10 last:border-b transition-colors duration-300 ${isActive ? "bg-accent/5" : ""}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      role="article"
      onFocus={() => onHover(project.id)}
      onBlur={() => onHover(null)}
    >
      {/* Accent left stripe on hover */}
      <motion.div
        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute left-0 top-0 bottom-0 w-[2px] origin-top rounded-full"
        style={{ backgroundColor: project.accentColor }}
      />

      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row md:items-center gap-4 pt-8 pb-4 md:pt-10 px-5 md:px-8 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      >
        {/* Title + tagline */}
        <div className="flex-1 min-w-0">
          <motion.h3
            animate={{ color: isActive ? "var(--foreground)" : undefined }}
            className={`text-2xl sm:text-3xl xl:text-5xl font-black tracking-tighter leading-none transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground/75 group-hover:text-foreground"}`}
          >
            {project.title}
          </motion.h3>
          <p className="font-mono text-sm uppercase tracking-wider text-foreground/55 mt-2">
            {project.tagline}
          </p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 md:w-2/5 justify-start md:justify-end">
          <span className="font-mono text-sm px-3 py-1 rounded-full border border-foreground/15 bg-surface/30 backdrop-blur-sm text-foreground/60">
            {project.category}
          </span>
          <div className="flex gap-2 items-center">
            {project.tags.slice(0, 2).map((t) => (
              <span key={t} className="font-mono text-xs uppercase tracking-wider text-foreground/35">{t}</span>
            ))}
            {project.tags.length > 2 && (
              <span className="font-mono text-xs text-foreground/30">+{project.tags.length - 2}</span>
            )}
          </div>

          {/* Source icon */}
          <motion.div
            animate={!shouldReduceMotion ? { scale: isActive ? 1.1 : 1 } : {}}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Code2
              size={18}
              className={`transition-colors duration-300 ${isActive ? "text-accent" : "text-foreground/20"}`}
            />
          </motion.div>
        </div>
      </Link>

      {/* Keep the project story available to touch and keyboard users. */}
      <div className="px-5 md:px-8 pb-8 md:pb-10">
        <p className="text-foreground/65 text-base leading-relaxed max-w-3xl">{project.overview}</p>
        {project.highlight && (
          <p className="text-sm text-accent leading-relaxed mt-3">{project.highlight}</p>
        )}
        {project.demoHref && (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-foreground/75 hover:text-foreground underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            <Play size={14} aria-hidden="true" /> Watch the demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

// ─── Custom glass cursor tooltip (matches hero/footer pattern) ─────────────
function GlassCursor({
  label,
  mouseX,
  mouseY,
}: {
  label: string | null
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
}) {
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 })
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 })

  return (
    <AnimatePresence>
      {label && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, filter: "blur(8px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          exit={{ scale: 0.5, opacity: 0, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed top-0 left-0 pointer-events-none z-[100] hidden lg:flex items-center justify-center will-change-transform"
          style={{ x: smoothX, y: smoothY, translateX: 145, translateY: -80 }}
        >
          <div className="bg-surface/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-foreground px-4 py-2 rounded-sm whitespace-nowrap overflow-hidden relative">
            <span className="font-mono text-xs tracking-widest uppercase font-medium">{label}</span>
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isInside, setIsInside] = useState(false)

  // GPU-accelerated mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const fn = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    window.addEventListener("mousemove", fn, { passive: true })
    return () => window.removeEventListener("mousemove", fn)
  }, [mouseX, mouseY])

  // Scroll-driven parallax for title
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const titleX = useTransform(scrollYProgress, [0, 1], ["-8%", "4%"])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4])

  const handleEnter = useCallback(() => setIsInside(true), [])
  const handleLeave = useCallback(() => { setIsInside(false); setActiveId(null) }, [])

  const activeProject = projects.find((p) => p.id === activeId) ?? null

  const cursorLabel = activeProject
    ? `VIEW ${activeProject.title.toUpperCase()}`
    : null

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto w-full overflow-hidden"
      style={{ fontFamily: "var(--font-google-sans-flex)" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Subtle background grid — matches services/bio */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(153,95,47,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(153,95,47,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">

        {/* ── Left: Sticky Label Column ── */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:sticky lg:top-40 w-full lg:w-1/3 h-fit"
        >
          {/* Eyebrow label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase font-medium">
              [ Selected Works ]
            </span>
          </div>

          {/* Scroll-driven display title */}
          <div style={{ perspective: shouldReduceMotion ? "none" : "1000px" }}>
            <motion.h2
              style={{ x: titleX, opacity: titleOpacity }}
              className="text-[9vw] lg:text-[4.5vw] font-black tracking-tighter leading-none uppercase text-foreground will-change-transform whitespace-nowrap"
            >
              FEAT
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/80 to-muted">
                URED
              </span>
            </motion.h2>
          </div>

          <p className="text-foreground/65 max-w-xs text-base leading-relaxed mt-6">
            Practical software, AI experiments, and an open-source contribution. A selection of what I have built and learned along the way.
          </p>

          {/* Project count chip */}
          <div className="mt-8 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-foreground/30 uppercase">
              4 Projects
            </span>
            <span className="w-4 h-[1px] bg-foreground/20" />
            <span className="font-mono text-xs tracking-[0.25em] text-foreground/30 uppercase">
              Open Source
            </span>
          </div>

          {/* Architectural corner decoration */}
          <div className="hidden lg:flex flex-col items-start gap-1 mt-16 opacity-30">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] bg-accent/60 origin-left"
                style={{ width: `${48 - i * 12}px` }}
              />
            ))}
          </div>

          {/* Portfolio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 hidden lg:block"
          >
            <Link
              href="https://github.com/Jinsssss333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
            >
              <span>More on GitHub</span>
              <ExternalLink
                size={12}
                className="text-foreground/40 group-hover:text-accent transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform"
              />
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground/40 scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Right: Project Rows ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-2/3"
        >
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isActive={activeId === project.id}
              onHover={setActiveId}
            />
          ))}

          {/* Bottom CTA — mobile only */}
          <motion.div
            variants={rowVariants}
            className="mt-10 lg:hidden flex justify-start"
          >
            <Link
              href="https://github.com/Jinsssss333"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              <span>More on GitHub</span>
              <ExternalLink size={12} className="text-foreground/40 group-hover:text-accent transition-colors" />
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground/40 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating 3-D Hover Portal (desktop only, reduced motion aware) ── */}
      <AnimatePresence>
        {isInside && activeProject && !shouldReduceMotion && (
          <HoverPortal project={activeProject} mouseX={mouseX} mouseY={mouseY} />
        )}
      </AnimatePresence>

      {/* ── Glass cursor tooltip (matches hero / footer) ── */}
      <GlassCursor label={cursorLabel} mouseX={mouseX} mouseY={mouseY} />
    </section>
  )
}
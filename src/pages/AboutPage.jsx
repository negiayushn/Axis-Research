import Reveal from "../components/Reveal"
import Icon from "../components/Icon"
import useInView from "../hooks/useInView"
import { Link } from "react-router-dom"

function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold ${className}`}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Generic network diagram — svg nodes + drawing lines                 */
/* ------------------------------------------------------------------ */
function NetNodes({ nodes, edges, broken = [], width = 420, height = 320 }) {
  const { ref, inView } = useInView({ threshold: 0.25 })
  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} className="w-full h-full" aria-hidden="true">
      {edges.map((e, i) => {
        const len = Math.hypot(nodes[e[1]].x - nodes[e[0]].x, nodes[e[1]].y - nodes[e[0]].y)
        const isBroken = broken.includes(e)
        return (
          <line
            key={i}
            x1={nodes[e[0]].x}
            y1={nodes[e[0]].y}
            x2={nodes[e[1]].x}
            y2={nodes[e[1]].y}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray={`${len}`}
            strokeDashoffset={inView ? 0 : len}
            className={`transition-[stroke-dashoffset] duration-1000 ease-out ${
              isBroken ? "text-error/50" : "text-primary/35"
            }`}
            style={{ transitionDelay: `${120 + i * 80}ms` }}
          />
        )
      })}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle
            cx={n.x}
            cy={n.y}
            r="7"
            fill={inView ? "#0037b0" : "none"}
            stroke="#0037b0"
            strokeWidth="1.4"
            className="transition-[fill] duration-700"
            style={{ transitionDelay: `${140 + i * 60}ms` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="2.4"
            fill="#1d4ed8"
            className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: `${180 + i * 60}ms` }}
          />
          <text
            x={n.x}
            y={n.y + 25}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="#434655"
            className={inView ? "opacity-100" : "opacity-0"}
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "opacity 0.7s ease",
              transitionDelay: `${200 + i * 60}ms`,
            }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Golden ratio helper for radial layouts                             */
/* ------------------------------------------------------------------ */
function radial(centerX, centerY, radius, index, count) {
  const angle = (index / count) * Math.PI * 2 - Math.PI / 2
  return {
    x: +(centerX + radius * Math.cos(angle)).toFixed(1),
    y: +(centerY + radius * Math.sin(angle)).toFixed(1),
  }
}

/* ================================================================== */
/*  SECTION 1 — ABOUT HERO                                             */
/* ================================================================== */
const heroNodes = [
  { label: "System", x: 210, y: 150 },
  { label: "People", x: 60, y: 275 },
  { label: "Community", x: 100, y: 95 },
  { label: "Business", x: 165, y: 250 },
  { label: "Organization", x: 255, y: 65 },
  { label: "Institution", x: 330, y: 175 },
  { label: "City", x: 385, y: 285 },
  { label: "Public Service", x: 340, y: 55 },
]
const heroEdges = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
  [1, 2], [3, 5], [2, 4], [5, 7], [4, 7],
]
const heroBroken = [[0, 6], [1, 3], [2, 6], [2, 7]]

function AboutHero() {
  return (
    <section className="w-full relative overflow-hidden py-space-2xl lg:py-28">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 -left-40 w-[560px] h-[560px] rounded-full bg-primary/5 blur-[120px] opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-secondary/5 blur-[110px] opacity-70"></div>
      </div>
      <div className="container-research">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-gutter-desktop items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 shadow-sm mb-space-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                About Us
              </span>
            </div>
            <h1 className="font-display text-display-xl-mobile md:text-display-xl font-extrabold tracking-tight text-on-surface leading-[1.06] mb-space-md">
              We Start With
              <br />
              <span className="text-primary">the Problem.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed mb-space-xl">
              We research meaningful real-world problems, understand why they
              exist and develop practical solutions that create measurable
              impact.
            </p>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Scroll</span>
              <span className="w-8 h-10 rounded-full border border-outline-variant flex items-start justify-center pt-2">
                <span className="w-1 h-1.5 rounded-full bg-primary animate-bounce"></span>
              </span>
            </div>
          </div>
          <div className="clay p-5 lg:p-7">
            <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pb-4 border-b border-outline-variant/20 mb-2">
              <span>A Real-World System</span>
              <span className="text-primary font-semibold">DISCOVER · CONNECT</span>
            </div>
            <div className="aspect-[4/3]">
              <NetNodes nodes={heroNodes} edges={heroEdges} broken={heroBroken} />
            </div>
            <p className="pt-3 font-body-sm text-body-sm text-on-surface-variant italic">
              Problems exist inside systems. Understanding the system is the first
              step toward improving it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 2 — THE CORE BELIEF                                        */
/* ================================================================== */
const beliefLabels = ["Technology", "AI", "Automation", "Software", "Apps"]

function CoreBeliefVisual() {
  const { ref, inView } = useInView({ threshold: 0.35 })
  const [left, right] = [beliefLabels.slice(0, 2), beliefLabels.slice(2)]
  return (
    <div ref={ref} className="mt-space-2xl">
      <div className="relative flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-6">
        {left.map((l, i) => (
          <span
            key={l}
            className={`px-3 sm:px-5 py-2 rounded-full border border-outline-variant/40 bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase tracking-wider transition-all duration-1000 ${inView ? "opacity-30 scale-90 -translate-x-2 sm:-translate-x-6" : ""}`}
            style={{ transitionDelay: `${200 + i * 160}ms` }}
          >
            {l}
          </span>
        ))}
        <span
          className={`relative z-10 px-5 sm:px-8 py-3.5 rounded-full bg-primary text-on-primary font-headline-md text-headline-md font-extrabold uppercase tracking-wider shadow-md transition-all duration-1000 ${inView ? "scale-110 ring-8 ring-primary/15" : "scale-95"}`}
          style={{ transitionDelay: `${600}ms` }}
        >
          The Problem
        </span>
        {right.map((l, i) => (
          <span
            key={l}
            className={`px-3 sm:px-5 py-2 rounded-full border border-outline-variant/40 bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase tracking-wider transition-all duration-1000 ${inView ? "opacity-30 scale-90 translate-x-2 sm:translate-x-6" : ""}`}
            style={{ transitionDelay: `${200 + i * 160}ms` }}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="relative flex items-center justify-between mt-1 max-w-xl mx-auto px-2">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline transition-opacity duration-1000" style={{ transitionDelay: "300ms", opacity: inView ? 0.5 : 1 }}>
          Possible answers
        </span>
        <div className="flex-1 mx-4 h-px bg-outline-variant/30 relative">
          <span className={`absolute left-1/2 -top-[3px] w-1.5 h-1.5 rounded-full bg-primary transition-all duration-700 ${inView ? "left-1/2" : "left-1/2"}`}></span>
        </div>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary transition-opacity duration-1000" style={{ transitionDelay: "800ms", opacity: inView ? 1 : 0.6 }}>
          Starting point
        </span>
      </div>
    </div>
  )
}

function CoreBelief() {
  return (
    <section className="w-full py-space-2xl lg:py-28 bg-surface-container-low/50">
      <div className="container-research flex flex-col items-center text-center">
        <p className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-[40px] lg:leading-[1.18] text-on-surface font-bold tracking-tight max-w-4xl">
          The world does not have a shortage of technology.
        </p>
        <p className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-[40px] lg:leading-[1.18] text-primary font-bold tracking-tight max-w-4xl mt-space-sm">
          It has a shortage of deeply understood problems and solutions that
          actually work.
        </p>
        <CoreBeliefVisual />
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-lg">
          Technology is not automatically a solution. The problem must come
          first.
        </p>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 3 — WHAT WE SEE                                            */
/* ================================================================== */
const problemCards = [
  {
    kind: "process",
    title: "A Complicated Process",
    desc: "A system that takes more time and effort than it should.",
  },
  {
    kind: "broken",
    title: "A Broken Service",
    desc: "Something people depend on that no longer works as it should.",
  },
  {
    kind: "interface",
    title: "A Frustrating Experience",
    desc: "Technology that creates friction instead of making life easier.",
  },
  {
    kind: "inefficient",
    title: "An Inefficient System",
    desc: "Time, resources and opportunities lost through outdated processes.",
  },
  {
    kind: "community",
    title: "A Community Challenge",
    desc: "A shared problem affecting people beyond a single individual.",
  },
  {
    kind: "barrier",
    title: "A System That Doesn't Serve People Well",
    desc: "Systems should work for the people who depend on them.",
  },
]

function ProblemGlyph({ kind }) {
  const hue = { dot: "#ba1a1a", line: "#747686" }
  const common = {
    fill: "none",
    stroke: hue.line,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }
  let glyph = null
  if (kind === "process") {
    glyph = (
      <>
        <circle cx="24" cy="24" r="15" {...common} />
        <circle cx="24" cy="24" r="6" fill="none" stroke={hue.dot} />
        {[0.8, 1.5, 2.1].map((r, i) => (
          <circle key={i} cx="24" cy="24" r={r} className="text-error" fill="none" stroke="currentColor" opacity="0.6" />
        ))}
      </>
    )
  } else if (kind === "broken") {
    glyph = (
      <>
        <circle cx="18" cy="26" r="7" {...common} />
        <circle cx="33" cy="19" r="7" {...common} />
        <path d="M23 27 L31 20" stroke={hue.dot} strokeWidth={1.6} strokeDasharray="2 4" />
        <path d="M14 33 L14 39 M22 33 L22 39" {...common} opacity="0.4" />
      </>
    )
  } else if (kind === "interface") {
    glyph = (
      <>
        <rect x="10" y="14" width="28" height="22" rx="3" {...common} />
        <rect x="15" y="20" width="7" height="3" rx="1" {...common} />
        <rect x="25" y="20" width="8" height="3" rx="1" stroke={hue.dot} />
        <path d="M14 30 h12 M14 34 h7" {...common} opacity="0.5" />
        <circle cx="32" cy="31" r="1.6" fill={hue.dot} />
      </>
    )
  } else if (kind === "inefficient") {
    glyph = (
      <>
        {[8, 14, 20, 26].map((x, i) => (
          <rect key={i} x={x} y={38 - [12, 18, 9, 22][i]} width="3.4" height={[12, 18, 9, 22][i]} rx="1.7" {...common} />
        ))}
        <path d="M5 12 h38" {...common} strokeDasharray="3 4" opacity="0.5" />
        <path d="M20 42 q4 -6 8 -3 t8 -1" stroke={hue.dot} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      </>
    )
  } else if (kind === "community") {
    glyph = (
      <>
        {[
          [16, 20, 6], [28, 16, 6], [34, 28, 6], [22, 30, 6], [16, 34, 5.5],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} {...common} />
        ))}
        <path d="M20 24 L26 19 M20 28 L28 24 M25 21 L30 30 M20 27 L17 31" {...common} opacity="0.5" />
        <circle cx="32" cy="34" r="6" stroke={hue.dot} strokeWidth={1.6} fill="none" strokeDasharray="2 3" />
      </>
    )
  } else {
    glyph = (
      <>
        <rect x="8" y="12" width="32" height="30" rx="3" {...common} />
        <path d="M24 18 v18 M10 28 h28" {...common} opacity="0.45" />
        <rect x="16" y="21" width="5" height="4" fill={hue.dot} opacity="0.7" />
        <path d="M14 33 l4 -4 M16 38 l8 8 M26 36 l8 8" {...common} opacity="0.4" />
      </>
    )
  }
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full" aria-hidden="true">
      <g className="transition-transform duration-500 group-hover:scale-110 origin-center text-outline">{glyph}</g>
    </svg>
  )
}

function WhatWeSee() {
  return (
    <section className="w-full py-space-2xl lg:py-28">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <Eyebrow>What We See</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            Problems Are Everywhere.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Some problems are visible. Others have become so normal that nobody
            questions them anymore.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {problemCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="clay p-space-xl group h-full">
                <div className="h-28 mb-space-lg text-outline">
                  <ProblemGlyph kind={c.kind} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                  {c.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 4 — BEFORE WE BUILD, WE ASK                                */
/* ================================================================== */
const questions = [
  "Who is affected?",
  "What is actually happening?",
  "Why does this exist?",
  "What evidence do we have?",
  "What has already been tried?",
  "Where does the system fail?",
  "What is the root cause?",
  "What would a meaningful solution look like?",
]

function InvestigationBoard() {
  return (
    <section className="w-full py-space-2xl lg:py-28 bg-surface-container-low/50">
      <div className="container-research">
        <div className="max-w-2xl mb-space-xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            Before We Build, We Ask Better Questions.
          </h2>
        </div>
        <div className="clay p-space-xl lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.18]" aria-hidden="true">
            <svg viewBox="0 0 600 400" className="w-full h-full text-primary">
              {[0, 1, 2, 3].map((i) => (
                <circle key={i} cx="300" cy="120" r={60 + i * 55} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
              ))}
            </svg>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="px-8 py-3 rounded-full bg-primary text-on-primary font-headline-md text-headline-md font-extrabold uppercase tracking-wider shadow-md mb-space-xl">
              The Problem
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md w-full">
              {questions.map((q, i) => (
                <Reveal key={q} delay={i * 90}>
                  <div className="h-full flex items-start gap-3 rounded-xl border border-outline-variant/30 bg-surface-container-lowest/80 px-4 py-3.5 hover:border-primary/40 transition-colors">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium leading-snug">
                      {q}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={760} className="mt-space-xl w-full flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider">
                  Understanding Before Building
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 5 — MANIFESTO PRINCIPLES                                   */
/* ================================================================== */

/* P1 — reality network */
const realityNodes = [
  { label: "Individual", x: 55, y: 285 },
  { label: "Community", x: 105, y: 95 },
  { label: "Business", x: 195, y: 235 },
  { label: "Organization", x: 265, y: 60 },
  { label: "Institution", x: 330, y: 170 },
  { label: "City", x: 300, y: 285 },
  { label: "Public Service", x: 385, y: 100 },
  { label: "System", x: 200, y: 160 },
]
const realityEdges = [
  [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6],
  [1, 3], [2, 4], [5, 4], [6, 3],
]

/* P2 — layered root cause */
const layers = ["SYMPTOM", "PROCESS", "SYSTEM", "ROOT CAUSE"]
function LayerVisual() {
  const { ref, inView } = useInView({ threshold: 0.4 })
  return (
    <div ref={ref} className="flex flex-col items-stretch gap-3 py-4">
      {layers.map((label, i) => {
        const isRoot = i === layers.length - 1
        return (
          <div
            key={label}
            className={`rounded-xl px-5 py-4 font-headline-sm text-headline-sm uppercase tracking-wider font-bold text-center transition-all duration-700 ${
              isRoot
                ? "bg-primary text-on-primary shadow-md"
                : i % 2
                  ? "bg-surface-container text-on-surface-variant border border-outline-variant/20"
                  : "bg-surface-container-low text-on-surface-variant border border-outline-variant/20"
            }`}
            style={{
              transform: inView ? `translateY(${-i * 8}px)` : "translateY(0)",
              transitionDelay: `${i * 140}ms`,
            }}
          >
            {label}
          </div>
        )
      })}
      <p className={`font-body-sm text-body-sm text-center text-on-surface-variant transition-opacity duration-700 mt-2 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "700ms" }}>
        We look beyond the surface to the root.
      </p>
    </div>
  )
}

/* P3 — decision pathway */
const pathway = [
  "Software", "AI", "Automation", "Process Redesign",
  "Better Data", "Existing Technology", "Physical Solution", "Research Recommendation",
]
function PathwayVisual() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  return (
    <div ref={ref} className="py-2">
      <div className="flex justify-center mb-2">
        <span className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold uppercase tracking-wider shadow-md">
          The Problem
        </span>
      </div>
      <div className="flex justify-center my-1">
        <svg width="120" height="52" viewBox="0 0 120 52" className="text-outline" aria-hidden="true">
          <path d="M60 0 v12 M60 12 C60 20 18 18 18 26 M60 12 C60 20 102 18 102 26 M60 12 C60 20 38 20 38 30 M60 12 C60 20 82 20 82 30 M60 12 C60 22 60 22 60 30" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {pathway.map((opt, i) => (
          <div
            key={opt}
            className={`rounded-lg border border-outline-variant/30 bg-surface-container px-3 py-2 text-center font-body-sm text-body-sm text-on-surface-variant transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"}`}
            style={{ transitionDelay: `${120 + i * 70}ms` }}
          >
            {opt}
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-lg border border-primary/25 bg-primary/5 px-4 py-3 text-center">
        <span className="font-headline-sm text-headline-sm text-primary font-bold uppercase tracking-wider">
          The Right Tool Follows the Right Understanding
        </span>
      </div>
    </div>
  )
}

/* P4 — build to learn loop */
const loopSteps = ["IDEA", "PROTOTYPE", "TEST", "LEARN", "IMPROVE"]
function LoopVisual() {
  const { ref, inView } = useInView({ threshold: 0.4 })
  return (
    <div ref={ref} className="py-4">
      <div className="relative flex flex-wrap items-center justify-center gap-2 py-2">
        <div className={`absolute inset-0 m-auto w-40 h-40 rounded-full border-2 border-dashed border-primary/25 ${inView ? "animate-[spin-slow_18s_linear_infinite]" : ""}`}></div>
        <div className="relative flex flex-wrap items-center justify-center gap-2">
          {loopSteps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className={`px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 font-label-md text-label-md uppercase tracking-wider font-semibold transition-all duration-700 ${inView ? "opacity-100" : "opacity-35"}`} style={{ transitionDelay: `${i * 130}ms` }}>
                {s}
              </span>
              <span className={`text-outline transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 130 + 90}ms` }}>
                <Icon name="arrow_forward" className="text-[16px]" />
              </span>
            </div>
          ))}
          <Icon
            name="autorenew"
            className={`text-primary text-[26px] ml-2 ${inView ? "animate-[spin-slow_6s_linear_infinite]" : "opacity-30"}`}
          />
        </div>
      </div>
      <p className={`font-body-sm text-body-sm text-center text-on-surface-variant mt-2 transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "700ms" }}>
        The cycle continues with every prototype.
      </p>
    </div>
  )
}

/* P5 — real world test */
const impact = ["Time Saved", "Access Improved", "Friction Reduced", "Results Measured"]
function SplitVisual() {
  const { ref, inView } = useInView({ threshold: 0.35 })
  return (
    <div ref={ref} className="py-2">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-outline-variant/25 bg-surface-container p-4">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-3">Controlled</p>
          <div className="grid grid-cols-3 gap-1.5 opacity-90">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-6 rounded-md bg-surface-container-high border border-outline-variant/30"></div>
            ))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">A prototype that looks perfect.</p>
        </div>
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 relative overflow-hidden">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-3">Real World</p>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="absolute rounded-full bg-primary/15" style={{ width: `${26 + i * 14}px`, height: `${26 + i * 14}px`, right: 8 + i * 8, bottom: 16 + i * 4 }}></div>
          ))}
          <div className="flex items-center gap-1 mt-10 relative">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`w-3.5 h-3.5 rounded-full border-2 border-primary ${i === 0 ? "bg-primary" : ""}`}></div>
            ))}
            <span className="ml-2 font-body-sm text-body-sm text-primary font-semibold">users · constraints</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <span className={`flex items-center gap-1 text-primary ${inView ? "animate-[float-soft_2.4s_ease-in-out_infinite]" : ""}`}>
          <Icon name="double_arrow" className="text-[22px]" />
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {impact.map((m, i) => (
          <span key={m} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/25 font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface-variant transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ transitionDelay: `${300 + i * 130}ms` }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}

/* P6 — evidence path */
const evidenceDots = [
  { x: 40, y: 175 }, { x: 120, y: 150 }, { x: 200, y: 185 },
  { x: 280, y: 140 }, { x: 360, y: 168 },
]
const evidencePath = "M20 60 C80 130, 150 40, 210 120 S340 100, 400 150"
function EvidenceVisual() {
  const { ref, inView } = useInView({ threshold: 0.4 })
  const len = 460
  return (
    <svg ref={ref} viewBox="0 0 420 220" className="w-full h-full text-primary" aria-hidden="true">
      <path
        d={evidencePath}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={`${len}`}
        strokeDashoffset={inView ? 0 : len}
        className="transition-[stroke-dashoffset] duration-1200 ease-out"
        style={{ transitionDuration: "1200ms" }}
      />
      {evidenceDots.map((d, i) => (
        <g key={i}>
          <circle cx={d.x} cy={d.y} r="5" fill="#f9f9ff" stroke="#0037b0" strokeWidth="1.6" className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${300 + i * 140}ms` }} />
          <circle cx={d.x} cy={d.y} r="2" fill="#1d4ed8" className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${300 + i * 140}ms` }} />
        </g>
      ))}
      <text x="30" y="30" fontSize="11" fontWeight="600" fill="#434655" style={{ fontFamily: "Inter", letterSpacing: "0.08em", transitionDelay: "900ms", transition: "opacity 0.7s ease" }} className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
        EVIDENCE INFLUENCES DIRECTION
      </text>
    </svg>
  )
}

/* P7 — ripple */
const rippleStages = ["EXPERIMENT", "PILOT", "IMPLEMENTATION", "SCALE"]
function RippleVisual() {
  const { ref, inView } = useInView({ threshold: 0.4 })
  return (
    <div ref={ref} className="py-2 flex flex-col items-center">
      <div className="relative w-44 h-44 flex items-center justify-center mb-6">
        {inView && [0, 1, 2].map((i) => (
          <span key={i} className="absolute inset-0 rounded-full border-2 border-primary/30" style={{ animation: `ripple 3s ease-out infinite`, animationDelay: `${i * 1}ms` }}></span>
        ))}
        <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex flex-col items-center justify-center shadow-md z-10 px-3 text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold leading-tight">Idea</span>
          <Icon name="arrow_forward" className="text-[14px] mt-1" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {rippleStages.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className={`px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 font-label-md text-label-md uppercase tracking-wider font-semibold text-on-surface-variant transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-40 translate-y-2"}`} style={{ transitionDelay: `${i * 140}ms` }}>
              {s}
            </span>
            {i !== rippleStages.length - 1 && (
              <span className={`text-primary transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${i * 140 + 100}ms` }}>
                <Icon name="arrow_forward" className="text-[16px]" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* P8 — disciplines */
const disciplineNames = ["Research", "Engineering", "Design", "Data", "Strategy", "Domain", "Communities", "Institutions"]
const discNodes = disciplineNames.map((label, i) => ({
  label,
  ...radial(210, 160, 118, i, disciplineNames.length),
}))
const discHubs = [{ label: "Shared Purpose", x: 210, y: 160 }]
function DiscVisual() {
  const all = [...discHubs, ...discNodes]
  const edges = [
    ...discNodes.map((_, i) => [0, i + 1]),
    ...discNodes.map((_, i) => [i + 1, i + 2 > discNodes.length ? 1 : i + 2]),
  ]
  const { ref, inView } = useInView({ threshold: 0.35 })
  return (
    <div ref={ref} className="relative">
      <div className={`absolute inset-0 m-auto w-44 h-44 rounded-full border border-primary/10 ${inView ? "animate-[spin-slow_24s_linear_infinite]" : ""}`}></div>
      <svg viewBox="0 0 420 320" className="w-full h-full">
        {edges.map((e, i) => {
          const len = Math.hypot(all[e[1]].x - all[e[0]].x, all[e[1]].y - all[e[0]].y)
          return (
            <line
              key={i}
              x1={all[e[0]].x}
              y1={all[e[0]].y}
              x2={all[e[1]].x}
              y2={all[e[1]].y}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray={`${len}`}
              strokeDashoffset={inView ? 0 : len}
              className="text-primary/30 transition-[stroke-dashoffset] duration-1000 ease-out"
              style={{ transitionDelay: `${120 + i * 60}ms` }}
            />
          )
        })}
        {discHubs.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="18" fill="#0037b0" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#ffffff" style={{ fontFamily: "Inter", letterSpacing: "0.06em" }}>
              SHARED PURPOSE
            </text>
          </g>
        ))}
        {discNodes.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r="6.5"
              fill={inView ? "#0037b0" : "none"}
              stroke="#0037b0"
              strokeWidth="1.3"
              className="transition-[fill] duration-700"
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            />
            <text
              x={n.x}
              y={n.y + 22}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="#434655"
              style={{ fontFamily: "Inter", letterSpacing: "0.06em" }}
              className={inView ? "opacity-100" : "opacity-0"}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

const principles = [
  {
    num: "01",
    title: "We Start With Reality.",
    desc: "Problems can come from individuals, communities, businesses, institutions, cities and public services.",
    visual: <NetNodes nodes={realityNodes} edges={realityEdges} />,
  },
  {
    num: "02",
    title: "We Research Before We Build.",
    desc: "We investigate, listen, collect evidence and look beyond symptoms to understand root causes.",
    visual: <LayerVisual />,
  },
  {
    num: "03",
    title: "We Do Not Assume Technology Is the Answer.",
    desc: "Software, AI and automation are tools. The right solution depends on the problem.",
    visual: <PathwayVisual />,
  },
  {
    num: "04",
    title: "We Build to Learn.",
    desc: "Ideas become prototypes. Prototypes become experiments. Experiments generate evidence.",
    visual: <LoopVisual />,
  },
  {
    num: "05",
    title: "We Test in the Real World.",
    desc: "A solution matters only when it improves something real.",
    visual: <SplitVisual />,
  },
  {
    num: "06",
    title: "We Follow the Evidence.",
    desc: "The goal is not to prove that we were right. The goal is to find what is right.",
    visual: <EvidenceVisual />,
  },
  {
    num: "07",
    title: "We Believe Solutions Should Travel Further.",
    desc: "A successful experiment can become a product, service, system, platform or model that helps more people.",
    visual: <RippleVisual />,
  },
  {
    num: "08",
    title: "We Work Across Boundaries.",
    desc: "Meaningful problems rarely belong to one discipline.",
    visual: <DiscVisual />,
  },
]

function PrincipleCard({ p, flip }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-gutter-desktop items-center">
        <div className={flip ? "lg:order-2" : ""}>
          <div className={`clay p-6 lg:p-8 ${flip ? "lg:order-2" : ""}`}>{p.visual}</div>
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-display text-[56px] font-extrabold text-primary/15 leading-none">PRINCIPLE {p.num}</span>
          </div>
          <div className="w-10 h-1 rounded-full bg-primary mb-5"></div>
          <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-on-surface font-bold tracking-tight mb-3">
            {p.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-md">
            {p.desc}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

function Principles() {
  return (
    <section className="w-full py-space-2xl lg:py-28">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <Eyebrow>The Manifesto</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            Eight Principles That Guide Our Work.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Philosophy expressed as working practice — not paragraphs.
          </p>
        </div>
        <div className="flex flex-col gap-space-2xl lg:gap-28">
          {principles.map((p, i) => (
            <PrincipleCard key={p.num} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 6 — OPEN PROBLEM-DISCOVERY ECOSYSTEM                       */
/* ================================================================== */
const ecosystemSources = ["People", "Communities", "Businesses", "Organizations", "Institutions", "Public Services"]
const ecosystemStages = ["Research", "Understanding", "Solution Exploration", "Prototype", "Test", "Implementation"]

function Ecosystem() {
  return (
    <section className="w-full py-space-2xl lg:py-28 bg-surface-container-low/50">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <Eyebrow>Ecosystem</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            Important Problems Should Not Remain Invisible.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            The people experiencing a problem often understand it in ways that
            nobody else can.
          </p>
        </div>

        <div className="clay p-space-xl lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5">
              {ecosystemSources.map((s, i) => (
                <Reveal key={s} delay={i * 60}>
                  <div className="rounded-lg border border-outline-variant/25 bg-surface-container-low px-3 py-2.5 text-center font-label-md text-label-md uppercase tracking-wider font-semibold text-on-surface-variant">
                    {s}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <Reveal className="lg:mx-6">
                <div className="flex flex-col items-center px-8 py-6 rounded-2xl bg-primary text-on-primary shadow-md text-center relative">
                  <div className="absolute inset-0 rounded-2xl border border-white/20 animate-pulse pointer-events-none"></div>
                  <Icon name="radar" className="text-[28px] mb-2" />
                  <span className="font-headline-sm text-headline-sm font-extrabold uppercase tracking-wider leading-tight">
                    Problem
                    <br />
                    Discovery
                  </span>
                </div>
              </Reveal>
              <div className="flex items-center gap-2 my-4 text-primary lg:rotate-0">
                <Icon name="arrow_downward" className="text-[20px]" />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {ecosystemStages.map((s, i) => (
                <Reveal key={s} delay={i * 70} className="flex items-center gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="flex-1 rounded-lg border border-outline-variant/25 bg-surface-container-low px-3 py-2.5 font-label-md text-label-md uppercase tracking-wider font-semibold text-on-surface-variant">
                    {s}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-space-xl flex flex-col sm:flex-row items-center gap-space-md">
          <Link
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            to="/#intake"
          >
            Submit a Problem
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Bring us a problem you have — or one the world has ignored.
          </span>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 7 — THE SYSTEMS PEOPLE DEPEND ON                           */
/* ================================================================== */
const systemTiles = [
  { label: "Businesses", icon: "storefront", statement: "Processes can be redesigned.", span: "md:col-span-2" },
  { label: "Communities", icon: "groups", statement: "Problems can be understood differently." },
  { label: "Institutions", icon: "account_balance", statement: "Systems can be questioned." },
  { label: "Cities", icon: "location_city", statement: "Services can be improved.", span: "md:col-span-2" },
  { label: "Industries", icon: "factory", statement: "Processes can be redesigned." },
  { label: "Digital Services", icon: "devices", statement: "Services can be improved." },
  { label: "Public Services", icon: "policy", statement: "Systems can be questioned.", span: "md:col-span-2" },
  { label: "Everyday Infrastructure", icon: "home_work", statement: "Problems can be understood differently." },
]

function SystemsGrid() {
  return (
    <section className="w-full py-space-2xl lg:py-28">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <Eyebrow>What We Want to Improve</Eyebrow>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-space-xs">
            The Systems People Depend On.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Not a list of departments — a map of the world we work within.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemTiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 55} className={t.span ? `${t.span}` : ""}>
              <div className="group relative h-40 rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between p-5 transition-colors duration-300 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <Icon name={t.icon} className="text-primary text-[26px]" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
                    SYS
                  </span>
                </div>
                <p className="font-headline-sm text-headline-sm text-on-surface font-bold">{t.label}</p>
                <div className="absolute inset-0 flex items-center justify-center px-5 bg-primary text-on-primary opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-body-sm text-body-sm font-semibold text-center leading-snug">
                    {t.statement}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 8 — BETTER QUESTIONS                                       */
/* ================================================================== */
const betterQuestions = [
  "What is the real problem?",
  "Who is affected?",
  "Why does it exist?",
  "What evidence do we have?",
  "What have we overlooked?",
  "What happens if we approach this differently?",
  "What is the simplest effective solution?",
  "How will we know whether it actually works?",
]

function BetterQuestions() {
  return (
    <section className="w-full py-space-2xl lg:py-32 bg-[#0B0F19] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[#1d4ed8]/20 blur-[140px]"></div>
      </div>
      <div className="container-research relative z-10">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#b7c4ff] font-semibold">
            Better Questions
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold tracking-tight mt-space-xs">
            Better Answers Begin With Better Questions.
          </h2>
        </div>
        <div className="border-t border-white/10">
          {betterQuestions.map((q, i) => (
            <div key={q} className="border-b border-white/10 py-8 lg:py-10">
              <p
                className={`font-display font-bold tracking-tight transition-all duration-700 ${
                  i === betterQuestions.length - 1
                    ? "text-3xl sm:text-4xl lg:text-5xl text-[#b7c4ff]"
                    : "text-2xl sm:text-3xl lg:text-4xl text-white/85"
                }`}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-space-xl font-body-sm text-body-sm text-slate-400">
          Every project at our lab begins by asking one of these questions.
        </p>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  SECTION 9 — FINAL MANIFESTO                                        */
/* ================================================================== */
const manifestoLines = [
  "Our work begins with a problem.",
  "It continues with curiosity.",
  "It is strengthened by research.",
  "It is challenged through experimentation.",
  "It becomes real through practical action.",
]
const strongStatements = [
  "Find Problems Worth Solving.",
  "Understand Them Deeply.",
  "Build Solutions That Actually Work.",
]

function FinalManifesto() {
  return (
    <section className="w-full py-space-2xl lg:py-32">
      <div className="container-research flex flex-col items-center text-center">
        <div className="w-12 h-1 rounded-full bg-primary mb-space-xl"></div>
        {manifestoLines.map((line, i) => (
          <Reveal key={line} delay={i * 80}>
            <p className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-[40px] lg:leading-[1.3] text-on-surface font-bold tracking-tight">
              {line}
            </p>
          </Reveal>
        ))}
        <Reveal delay={500} className="mt-space-xl">
          <p className="font-display text-headline-lg-mobile md:text-[44px] lg:text-[52px] lg:leading-[1.15] text-primary font-extrabold tracking-tight max-w-4xl">
            We exist to understand meaningful problems and create solutions that
            actually work.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-2xl w-full max-w-4xl">
          {strongStatements.map((s, i) => (
            <Reveal key={s} delay={i * 110}>
              <div className="h-full rounded-2xl border border-outline-variant/25 bg-surface-container-low px-5 py-6">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wide leading-snug">
                  {s}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={400} className="mt-space-2xl">
          <p className="font-display text-headline-md text-headline-md text-primary italic font-bold">
            Start with the problem. Not the technology.
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-xl">
          <Link
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            to="/#methodology"
          >
            Explore How We Work
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm transition-all duration-200"
            to="/#intake"
          >
            Submit a Problem
            <Icon name="arrow_forward" className="text-primary text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CoreBelief />
      <WhatWeSee />
      <InvestigationBoard />
      <Principles />
      <Ecosystem />
      <SystemsGrid />
      <BetterQuestions />
      <FinalManifesto />
    </main>
  )
}
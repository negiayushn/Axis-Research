import { useState } from "react"
import Icon from "../Icon"
import Reveal from "../Reveal"

const stages = {
  1: {
    icon: "radar",
    title: "Phase 01: Discover & Signal Mapping",
    shortTitle: "Discover",
    subtitle: "Signal mapping & anomaly detection",
    desc: "Scanning decentralized networks, clinical registries, and frontline operator reports for unaddressed friction points.",
    chip: "Signal Capture",
    phase: "Phase 01",
  },
  2: {
    icon: "science",
    title: "Phase 02: Research & Empirical Inquiry",
    shortTitle: "Research",
    subtitle: "Ethnographic & empirical inquiry",
    desc: "Field deployments, quantitative baseline extraction, stakeholder interviews, and rigorous contextual isolation.",
    chip: "Fieldwork",
    phase: "Phase 02",
  },
  3: {
    icon: "schema",
    title: "Phase 03: Understand & Root Cause Synthesis",
    shortTitle: "Understand",
    subtitle: "Root cause model synthesis",
    desc: "Mapping complex systemic feedback loops, causal graphs, and bottleneck points to ensure no misdiagnoses.",
    chip: "Systems Modeling",
    phase: "Phase 03",
  },
  4: {
    icon: "construction",
    title: "Phase 04: Build & Test Prototyping",
    shortTitle: "Build & Test",
    subtitle: "Rapid iterative prototyping",
    desc: "Rapid iteration on zero-to-one prototypes, operational pilots, and real-world boundary condition testing.",
    chip: "Pilots",
    phase: "Phase 04",
  },
  5: {
    icon: "rocket_launch",
    title: "Phase 05: Scale Impact & Institutional Rollout",
    shortTitle: "Scale Impact",
    subtitle: "Systemic rollout & measurement",
    desc: "Production deployment, open-access knowledge syndication, and continuous empirical validation.",
    chip: "Deployment",
    phase: "Phase 05",
  },
}

const stageOrder = [1, 2, 3, 4, 5]

export default function Methodology() {
  const [active, setActive] = useState(1)
  const detail = stages[active]

  return (
    <section className="w-full py-space-2xl bg-surface-container-low" id="methodology">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
            The Methodology
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            From Problem to Real-World Impact.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            A 5-stage disciplined progression from ambiguity to deployed
            reality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
          {stageOrder.map((stageNum, i) => {
            const stage = stages[stageNum]
            const isActive = active === stageNum
            return (
              <Reveal key={stageNum} delay={i * 70} className="h-full">
                <div
                  onClick={() => setActive(stageNum)}
                  className={`clay p-space-lg cursor-pointer h-full ${isActive ? "ring-2 ring-primary" : ""}`}
                >
                  <div className="flex items-center justify-between mb-space-md">
                    <span
                      className={`w-7 h-7 rounded-full font-label-md text-label-md flex items-center justify-center font-bold ${
                        isActive
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-high text-on-surface"
                      }`}
                    >
                      {stageNum}
                    </span>
                    <span
                      className={`font-label-sm text-label-sm uppercase tracking-widest font-semibold ${
                        isActive ? "text-primary" : "text-on-surface-variant"
                      }`}
                    >
                      {stage.phase}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                    {stage.shortTitle}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    {stage.subtitle}
                  </p>
                  <div className="pt-space-sm">
                    <span className="inline-block px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      {stage.chip}
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal delay={120} className="mt-space-lg">
          <div className="clay p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Icon name={detail.icon} />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                {detail.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {detail.desc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              Protocol AXIS-R8
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
import Icon from "../Icon"
import Reveal from "../Reveal"

const steps = [
  {
    number: "01",
    icon: "troubleshoot",
    title: "Real Problem",
    tag: "Root cause extraction",
    desc: "Isolating observable human and institutional strain from assumptions.",
  },
  {
    number: "02",
    icon: "science",
    title: "Deep Research",
    tag: "Empirical field analysis",
    desc: "Qualitative on-site ethnography mapped against quantitative data pools.",
  },
  {
    number: "03",
    icon: "schema",
    title: "Synthesis & Clarity",
    tag: "Systemic clarity",
    desc: "Distilling multi-variable dependencies into testable causal models.",
  },
  {
    number: "04",
    icon: "rocket_launch",
    title: "Best Solution",
    tag: "Fit-for-purpose execution",
    desc: "Deploying targeted software, policy frameworks, or mechanical interventions.",
  },
]

export default function Approach() {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low/50">
      <div className="container-research">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
              Our Approach
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
              We Start With the Problem.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Technology is one possible tool. Understanding the problem comes
            first.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90} className="h-full">
              <div
                className="clay p-space-lg flex flex-col justify-between relative group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-200">
                      <Icon name={step.icon} className="text-[20px]" />
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-primary">
                    {step.tag}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm font-body-sm text-body-sm text-on-surface-variant">
                  {step.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
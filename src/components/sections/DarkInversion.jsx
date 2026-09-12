import Icon from "../Icon"
import Reveal from "../Reveal"

const leftTools = [
  { icon: "terminal", color: "text-blue-700", title: "Software & Platforms", desc: "Scalable digital interfaces & coordination layers." },
  { icon: "neurology", color: "text-indigo-600", title: "Autonomous AI Systems", desc: "Automated reasoning, synthesis, and vision pipelines." },
  { icon: "design_services", color: "text-blue-600", title: "Process & Service Design", desc: "Operational workflow reconfiguration and removal of friction." },
]

const rightTools = [
  { icon: "science", color: "text-purple-700", title: "Empirical Research", desc: "Hard evidence, field trials, and data validations." },
  { icon: "precision_manufacturing", color: "text-teal-600", title: "Physical Engineering", desc: "Hardware, mechanical assemblies, and materials science." },
  { icon: "psychology", color: "text-sky-700", title: "Behavioral Architecture", desc: "Incentive alignment and institutional decision mechanics." },
]

function ToolCard({ tool }) {
  return (
    <div className="clay p-space-lg group">
      <div className="flex items-center gap-3 mb-2">
        <Icon name={tool.icon} className={`text-[24px] ${tool.color} group-hover:scale-110 transition-transform`} />
        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">{tool.title}</h4>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{tool.desc}</p>
    </div>
  )
}

export default function DarkInversion() {
  return (
    <section className="w-full py-space-2xl lg:py-32 bg-surface text-on-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary-container via-secondary to-transparent blur-[140px]"></div>
      </div>
      <div className="container-research relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm tracking-widest uppercase mb-space-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              First Principles
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mb-space-xs">
              Technology Is a Tool. Not the Starting Point.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              The best solution depends on the problem.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-4xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md items-center">
            <div className="flex flex-col gap-space-md">
              {leftTools.map((tool, i) => (
                <Reveal key={tool.title} delay={i * 90}>
                  <ToolCard tool={tool} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="flex flex-col items-center justify-center p-8 my-6 md:my-0">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-tr from-primary via-secondary-container to-blue-400 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_60px_rgba(29,78,216,0.35)]">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-blue-100 font-semibold mb-1">
                  Invariable Anchor
                </span>
                <span className="font-headline-sm text-headline-sm text-white font-bold leading-tight">
                  PROBLEM &amp;
                  <br />
                  NEED
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-wider text-blue-200">
                  First Principles
                </span>
              </div>
            </Reveal>

            <div className="flex flex-col gap-space-md">
              {rightTools.map((tool, i) => (
                <Reveal key={tool.title} delay={i * 90}>
                  <ToolCard tool={tool} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Icon from "../Icon"
import Reveal from "../Reveal"

const services = [
  {
    icon: "automation",
    title: "Technology, AI & Automation",
    desc: "Develop digital products, intelligent systems and automation when technology is the right solution to the problem.",
    caps: ["Digital Platforms", "AI Systems", "Automation"],
  },
  {
    icon: "search_insights",
    title: "Problem Discovery & Research",
    desc: "Identify meaningful problems, understand affected people and investigate root causes through research, data and evidence.",
    caps: ["Problem Discovery", "User Research", "Root Cause Analysis"],
  },
  {
    icon: "lightbulb",
    title: "Solution Strategy & Innovation",
    desc: "Explore multiple approaches and design the most effective solution before deciding what should be built or implemented.",
    caps: ["Solution Design", "Innovation Strategy", "Technology Evaluation"],
  },
  {
    icon: "science",
    title: "Prototype & Pilot Programs",
    desc: "Turn ideas into practical prototypes and test them with real users before making larger investments.",
    caps: ["Prototypes", "Proof of Concept", "Real-World Testing"],
  },
  {
    icon: "rocket_launch",
    title: "Implementation & Scale",
    desc: "Help successful solutions move from validated ideas into real-world implementation, deployment and growth.",
    caps: ["Deployment", "Integration", "Scaling Strategy"],
  },
  {
    icon: "public",
    title: "Public & Community Innovation",
    desc: "Research and address challenges affecting communities, organizations and public services through evidence-based innovation.",
    caps: ["Public Services", "Communities", "Social Innovation"],
  },
]

export default function Services() {
  return (
    <section className="w-full py-space-2xl lg:py-32" id="services">
      <div className="container-research">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-md font-semibold">
            Our Capabilities
          </span>
          <h2 className="font-display text-display-xl-mobile md:text-headline-lg lg:text-[52px] lg:leading-[1.1] font-bold text-on-surface tracking-tight">
            From Problems to Practical Solutions.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-lg max-w-2xl leading-relaxed">
            We combine research, strategy, technology and experimentation to
            understand complex problems and develop solutions that create
            measurable real-world impact.
          </p>
        </div>

        {/* 2 x 3 service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg lg:gap-10">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className="h-full">
              <div
                className="clay p-space-xl lg:p-10 flex flex-col h-full group"
              >
                <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/5 text-primary flex items-center justify-center mb-space-lg group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors duration-200">
                  <Icon name={service.icon} className="text-[24px]" />
                </div>

                <h3 className="font-headline-sm text-headline-sm lg:text-2xl text-on-surface font-bold mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                  {service.desc}
                </p>

                <div className="mt-auto">
                  <div className="pt-6 mb-6 border-t border-outline-variant/20">
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      {service.caps.join("  •  ")}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider font-semibold group-hover:gap-3 transition-all duration-200"
                  >
                    Explore Service
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Statement band */}
        <Reveal delay={120} className="mt-20 lg:mt-28">
          <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-2xl px-8 py-14 lg:px-16 lg:py-20 text-center flex flex-col items-center">
            <div className="w-12 h-1 rounded-full bg-primary mb-space-xl"></div>
            <p className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight max-w-3xl leading-snug">
              “Technology is one of our tools—not our starting point.”
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-lg max-w-2xl leading-relaxed">
              Every problem requires a different approach. The right solution may
              involve technology, AI, automation, research, process redesign,
              existing systems or a combination of approaches.
            </p>
            <a
              className="mt-space-xl inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-9 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              href="#methodology"
            >
              Explore How We Work
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
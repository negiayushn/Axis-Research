import Icon from "../Icon"
import Reveal from "../Reveal"

const domains = [
  {
    icon: "fingerprint",
    iconClass: "bg-primary/10 text-primary",
    title: "People",
    desc: "Everyday challenges worth understanding.",
    footer: "Cognition & Lived Experience",
    arrowClass: "text-primary",
  },
  {
    icon: "share",
    iconClass: "bg-secondary-container/10 text-secondary-container",
    title: "Communities",
    desc: "Shared environments needing resilient infrastructure.",
    footer: "Social Cohesion & Habitat",
    arrowClass: "text-secondary",
  },
  {
    icon: "grid_view",
    iconClass: "bg-primary/10 text-primary",
    title: "Businesses",
    desc: "Operational bottlenecks and market misalignments.",
    footer: "Resource Distribution",
    arrowClass: "text-primary",
  },
  {
    icon: "account_balance",
    iconClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    title: "Public Systems",
    desc: "Civic delivery and institutional bottlenecks.",
    footer: "Governance & Logistics",
    arrowClass: "text-on-surface",
  },
]

export default function Domains() {
  return (
    <section className="w-full py-space-2xl">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
            Origins
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            Problems Can Come From Anywhere.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Meaningful friction exists across every layer of modern
            civilization.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {domains.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 80} className="h-full">
              <div className="clay p-space-xl flex flex-col justify-between h-full group">
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-space-lg group-hover:scale-110 transition-transform duration-200 ${domain.iconClass}`}
                  >
                    <Icon name={domain.icon} className="text-[28px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                    {domain.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {domain.desc}
                  </p>
                </div>
                <div className="pt-space-lg mt-space-lg flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  <span>{domain.footer}</span>
                  <Icon name="north_east" className={`text-[16px] ${domain.arrowClass}`} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
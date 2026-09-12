import { taxonomy, taxonomyIcons } from "../data/taxonomy"
import Icon from "../components/Icon"

function CategoryStat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
        {value}
      </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}

export default function ProblemsPage() {
  return (
    <main>
      <section className="w-full relative overflow-hidden py-space-2xl lg:py-24">
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
          <div className="w-[720px] h-[520px] rounded-full bg-primary/5 blur-[120px] opacity-70"></div>
        </div>
        <div className="container-research">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-gutter-desktop items-center">
            <div className="lg:col-span-8 flex flex-col items-start pr-0 lg:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm tracking-widest uppercase mb-space-lg shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Research Index · 18 Domains · 300 Problems
              </div>
              <h1 className="font-display text-display-xl-mobile md:text-display-xl font-extrabold tracking-tight text-on-surface leading-[1.06] mb-space-md">
                The Problem <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-secondary">
                  Registry.
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-space-xl">
                Eighteen problem domains, three hundred registered statements —
                field-tested, open for contribution, and tracked against a
                public progress protocol.
              </p>
              <div className="flex flex-wrap items-center gap-8 font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Icon name="verified" className="text-primary text-[18px]" />
                  Field Verified
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="hub" className="text-primary text-[18px]" />
                  Open Contributions
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="clay p-space-xl grid grid-cols-2 gap-8">
                <CategoryStat label="Problem Domains" value={18} />
                <CategoryStat label="Open Statements" value={300} />
                <CategoryStat label="Active Prototypes" value={42} />
                <CategoryStat label="Field Deployed" value={12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-space-2xl bg-surface-container-low/50">
        <div className="container-research">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
                Active Registry
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
                All Problems in Progress.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              The complete investigation taxonomy. Dossier access available for
              each active domain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {taxonomy.map((name, i) => (
              <div
                key={name}
                className="clay p-space-xl flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-200">
                      <Icon name={taxonomyIcons[i]} className="text-[22px]" />
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">
                    {name}
                  </h3>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  <span>Active Registry</span>
                  <Icon name="north_east" className="text-[16px] text-primary" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-space-2xl text-center font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            18 domains · 300 problem statements under investigation.
          </p>
        </div>
      </section>
    </main>
  )
}
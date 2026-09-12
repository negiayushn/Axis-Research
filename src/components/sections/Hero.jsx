import { Link } from "react-router-dom"
import Icon from "../Icon"
import Reveal from "../Reveal"

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden py-space-2xl lg:py-32">
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[720px] h-[520px] rounded-full bg-primary/5 blur-[120px] opacity-70"></div>
        <div className="w-[480px] h-[360px] rounded-full bg-secondary-container/5 blur-[90px] -translate-y-20 translate-x-28"></div>
      </div>
      <div className="container-research">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-gutter-desktop items-center">
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm tracking-widest uppercase mb-space-lg shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Global Problem Research &amp; Innovation Lab
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display text-display-xl-mobile md:text-display-xl font-extrabold tracking-tight text-on-surface leading-[1.06] mb-space-md">
                Find Problems <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-secondary">
                  Worth Solving.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-space-xl">
                We research real-world challenges and develop practical solutions
                that create measurable impact.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
                <Link
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                  to="/problems"
                >
                  Explore Problems
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider px-7 py-3.5 rounded-full shadow-sm transition-all duration-200 group"
                  href="#intake"
                >
                  <span>Submit a Problem</span>
                  <Icon
                    name="arrow_forward"
                    className="text-primary text-[18px] group-hover:translate-x-0.5 transition-transform duration-150"
                  />
                </a>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-space-xl pt-space-lg flex items-center gap-8 text-on-surface-variant">
                <div className="flex items-center gap-2 font-label-sm text-label-sm tracking-wider uppercase">
                  <Icon name="verified" className="text-primary text-[18px]" />
                  <span>Evidence Driven</span>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-label-sm tracking-wider uppercase">
                  <Icon name="hub" className="text-primary text-[18px]" />
                  <span>Open Syntheses</span>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-label-sm tracking-wider uppercase">
                  <Icon name="vital_signs" className="text-primary text-[18px]" />
                  <span>Field Deployed</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <Reveal delay={300} translate="translate-x-8">
              <div className="clay relative w-full max-w-[480px] aspect-square p-6 flex flex-col items-center justify-between">
                <div className="w-full flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                    Live System Topology
                  </span>
                  <span className="font-headline-sm text-label-sm text-primary">
                    #AX-0091
                  </span>
                </div>
                <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-surface-container-low my-2 group">
                  <img
                    alt="Hero Problem-to-Impact Graphic"
                    className="w-full h-full object-contain p-2 transition-transform duration-700 scale-95 opacity-90 hover:scale-105 hover:opacity-100"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VaQ4n1DFBnMoLPxmeH5pRLNxxt-76ydZHvCYdYq10nsj18TT-__9m91-Rb7BGcWxBj_7qdJsOOB2wahnVj9nzSBcMiFABIfxqkMAhFDajSIOPjN0lymRolev7jwp25JAeDoOTALRO2C3SgoiQteS5I0nTZMsZdGHYP1o26pRCDF9GN5oXUC9gvmmFMMMnL0pzIv7Zz4K2TUsbfke-5CFemCPfmS5WaSmCFUpXey4DWTp_n6GG0M7FhRxc"
                  />
                </div>
                <div className="w-full pt-3 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    Problem{" "}
                    <Icon name="arrow_right_alt" className="text-[14px]" />
                    Solution
                  </span>
                  <span className="font-headline-sm text-label-sm text-on-surface">
                    Vector: Empirical Field Inquiry
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
import Reveal from "../Reveal"

export default function FinalCTA() {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low">
      <div className="container-research">
        <Reveal>
          <div className="clay p-space-2xl md:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-0">
              <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mb-space-xs">
                Let’s Solve What Matters.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-xl">
                Real problems deserve more than assumptions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-space-md">
                <a
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  href="#intake"
                >
                  Submit a Problem
                </a>
                <a
                  className="inline-flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200"
                  href="#current-inquiries"
                >
                  Explore Research
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
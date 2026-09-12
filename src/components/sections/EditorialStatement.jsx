export default function EditorialStatement() {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low/40 relative overflow-hidden" id="about">
      <div className="container-research py-12 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-1 rounded-full bg-primary mb-space-xl"></div>
        <blockquote className="font-headline-lg text-headline-md md:text-headline-lg font-light text-on-surface tracking-tight max-w-4xl leading-tight">
          “Good Solutions Begin With Good Questions.”
        </blockquote>
        <p className="mt-space-md font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-medium">
          — Axis Core Research Directive
        </p>
      </div>
    </section>
  )
}
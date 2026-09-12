import Icon from "../Icon"
import { openMailto, inputClass } from "../../lib/mailto"

const CONTACT_EMAIL = "inquiries@axis.research"

export default function SubmitProblem() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    openMailto({
      to: CONTACT_EMAIL,
      subject: "Project Inquiry — Real-World Problem",
      body: [
        "What is the problem?",
        form.problem.value,
        "",
        "Who does it affect?",
        form.affected.value,
        "",
        "Where does it happen?",
        form.location.value,
        "",
        "Contact email:",
        form.email.value || "(not provided)",
      ].join("\n"),
    })
  }

  return (
    <section className="w-full py-space-2xl" id="intake">
      <div className="container-research">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
              Open Inquiry
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
              Submit a Problem.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Tell us what isn’t working. You don’t need to know the solution.
            </p>
          </div>
          <div className="clay p-space-xl md:p-12">
            <form className="space-y-space-lg" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                  1. What is the problem?
                </label>
                <textarea
                  name="problem"
                  className={`${inputClass} resize-none`}
                  placeholder="Describe the breakdown, inefficiency, or frustration in concrete terms..."
                  required
                  rows="3"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                    2. Who does it affect?
                  </label>
                  <input
                    name="affected"
                    className={inputClass}
                    placeholder="Specific population, workers, citizens..."
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                    3. Where does it happen?
                  </label>
                  <input
                    name="location"
                    className={inputClass}
                    placeholder="Geography, industry, or environment..."
                    required
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                  Contact email <span className="text-on-surface-variant">(optional)</span>
                </label>
                <input
                  name="email"
                  className={inputClass}
                  placeholder="you@institution.org"
                  type="email"
                />
              </div>

              <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Submitting opens your email app with everything filled in —
                  hit send and it reaches the field research desk.
                </p>
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                  type="submit"
                >
                  Open Gmail &amp; Send
                  <Icon name="north_east" className="text-[16px]" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
import { useState } from "react"
import Icon from "../components/Icon"
import { openMailto, inputClass } from "../lib/mailto"

const heroDisciplines = [
  { icon: "search_insights", label: "Research" },
  { icon: "lightbulb", label: "Strategy" },
  { icon: "code", label: "Engineering" },
  { icon: "automation", label: "AI" },
  { icon: "query_stats", label: "Data" },
  { icon: "design_services", label: "Design" },
  { icon: "public", label: "Community" },
]

const disciplines = [
  {
    icon: "search_insights",
    title: "Research & Problem Discovery",
    desc: "Understand complex challenges, investigate root causes and uncover meaningful insights.",
  },
  {
    icon: "lightbulb",
    title: "Innovation & Strategy",
    desc: "Explore possibilities, challenge assumptions and design better approaches.",
  },
  {
    icon: "code",
    title: "Engineering & Technology",
    desc: "Build practical systems and technology solutions when technology is the right answer.",
  },
  {
    icon: "automation",
    title: "AI & Automation",
    desc: "Identify meaningful opportunities and develop intelligent systems that improve how things work.",
  },
  {
    icon: "query_stats",
    title: "Data & Intelligence",
    desc: "Turn information and evidence into insights that support better decisions.",
  },
  {
    icon: "design_services",
    title: "Product & Design",
    desc: "Design useful, accessible and practical experiences around real human needs.",
  },
  {
    icon: "public",
    title: "Public & Community Innovation",
    desc: "Explore challenges affecting communities, public services and systems that people depend on.",
  },
]

const processSteps = [
  "Discover",
  "Research",
  "Understand",
  "Design",
  "Build",
  "Test",
  "Improve",
  "Implement",
  "Scale",
]

const filters = [
  "All Roles",
  "Research",
  "Engineering",
  "Design",
  "Data",
  "AI & Automation",
  "Strategy",
  "Early Careers",
]

const roleDefinitions = [
  { title: "Research Analyst", dept: "Research & Problem Discovery", cat: "Research" },
  { title: "Full-Stack Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Frontend Developer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Backend Developer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Backend Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "DevOps Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Cloud Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Observability Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Security Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "QA Test Engineer", dept: "Engineering & Technology", cat: "Engineering" },
  { title: "Product Designer", dept: "Product & Design", cat: "Design" },
  { title: "Data Analyst", dept: "Data & Intelligence", cat: "Data" },
  { title: "AI Systems Researcher", dept: "AI & Automation", cat: "AI & Automation" },
  { title: "Strategy Associate", dept: "Innovation & Strategy", cat: "Strategy" },
  { title: "Research Fellow", dept: "Academic Partnerships", cat: "Early Careers" },
  { title: "Design Engineering Intern", dept: "Product & Design", cat: "Early Careers" },
]

const jobTypes = ["Full-Time", "Intern", "Contribution"]

function CareersHero() {
  return (
    <section className="w-full relative overflow-hidden py-space-2xl lg:py-32">
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[720px] h-[520px] rounded-full bg-primary/5 blur-[120px] opacity-70"></div>
      </div>
      <div className="container-research">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-gutter-desktop items-center">
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-sm text-label-sm tracking-widest uppercase mb-space-lg shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Careers
            </div>
            <h1 className="font-display text-display-xl-mobile md:text-display-xl font-extrabold tracking-tight text-on-surface leading-[1.06] mb-space-md">
              Work on Problems <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-secondary">
                That Matter.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-space-xl">
              Join a multidisciplinary team of researchers, engineers, designers,
              analysts and innovators working to understand meaningful problems
              and create practical solutions that make a real-world impact.
            </p>
            <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                href="#open-roles"
              >
                Join Us
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider px-7 py-3.5 rounded-full shadow-sm transition-all duration-200"
                href="#career-paths"
              >
                Start Your Career
                <Icon name="arrow_forward" className="text-primary text-[18px]" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="clay w-full max-w-[480px] p-6">
              <div className="w-full flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest pb-4 border-b border-outline-variant/20">
                <span>Collaborative Problem-Solving System</span>
                <span className="text-primary font-semibold">#R&amp;D-NET</span>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {heroDisciplines.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center gap-2.5 rounded-xl border border-outline-variant/30 bg-surface-container-low px-3 py-2.5"
                  >
                    <Icon name={d.icon} className="text-primary text-[18px]" />
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      {d.label}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 rounded-xl bg-primary text-on-primary px-3 py-2.5 col-span-2 sm:col-span-3 justify-center">
                  <Icon name="psychology" className="text-[18px]" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    Shared Purpose · Real Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CareersManifesto() {
  return (
    <section className="w-full py-space-2xl lg:py-32">
      <div className="container-research flex flex-col items-center text-center">
        <div className="w-12 h-1 rounded-full bg-primary mb-space-xl"></div>
        <p className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-[44px] lg:leading-[1.15] text-on-surface font-bold tracking-tight max-w-4xl">
          Your work should solve more than tasks.
          <br />
          <span className="text-primary">It should solve problems that matter.</span>
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-space-xl">
          Here, work does not begin by asking what we should build. It begins by
          asking what needs to be understood, improved and solved.
        </p>
      </div>
    </section>
  )
}

function CareerPaths() {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low/50" id="career-paths">
      <div className="container-research">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <div className="clay p-space-xl lg:p-12 flex flex-col h-full group">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
              For Experienced Professionals
            </span>
            <h3 className="font-display text-headline-lg-mobile md:text-headline-md text-on-surface font-bold tracking-tight mt-5 mb-4">
              Bring Your Expertise. Expand Your Impact.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-xl">
              We are building a multidisciplinary team of researchers, engineers,
              designers, analysts and innovators. Bring your expertise to
              complex problems and work with different perspectives to create
              practical solutions.
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider font-semibold group-hover:gap-3 transition-all duration-200"
                href="#open-roles"
              >
                Explore Opportunities
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>

          <div className="clay p-space-xl lg:p-12 flex flex-col h-full group">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              For Students &amp; Early-Career Talent
            </span>
            <h3 className="font-display text-headline-lg-mobile md:text-headline-md text-on-surface font-bold tracking-tight mt-5 mb-4">
              Start by Solving Real Problems.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-xl">
              Learn by working on meaningful challenges. Research complex
              problems, explore ideas, test solutions and build practical
              experience while contributing to work that can create real-world
              impact.
            </p>
            <div className="mt-auto">
              <a
                className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold group-hover:gap-3 transition-all duration-200"
                href="#open-roles"
              >
                Explore Early Careers
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Disciplines() {
  return (
    <section className="w-full py-space-2xl lg:py-28">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
            Where You Can Contribute
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            Different Skills. Shared Purpose.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Important problems rarely belong to a single discipline. Better
            solutions emerge when different perspectives work together.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {disciplines.map((d) => (
            <div
              key={d.title}
              className="clay p-space-xl flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/5 text-primary flex items-center justify-center mb-space-lg group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors duration-200">
                  <Icon name={d.icon} className="text-[24px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">
                  {d.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low/50">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
            How We Work
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            Every Role Connects to a Bigger Process.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Whether you research, design, build or analyze, your work contributes
            to a shared mission: understanding meaningful problems and developing
            solutions that work.
          </p>
        </div>

        <div className="clay p-space-xl lg:p-12">
          <div className="flex flex-wrap items-center gap-y-6">
            {processSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-display font-bold flex items-center justify-center text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold whitespace-nowrap">
                    {step}
                  </span>
                </div>
                {i !== processSteps.length - 1 && (
                  <span className="mx-4 text-outline hidden md:inline">
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-space-lg pt-space-lg border-t border-outline-variant/20 font-body-sm text-body-sm text-on-surface-variant">
            People from different disciplines contribute at different stages —
            each role is a node in the same system.
          </p>
        </div>
      </div>
    </section>
  )
}

function JobRow({ job, last }) {
  return (
    <div
      className={`p-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md transition-colors hover:bg-surface-container-low/40 ${
        last ? "" : "border-b border-outline-variant/20"
      }`}
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {job.title}
          </h3>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
            {job.type}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
          <span>{job.dept}</span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span>{job.cat}</span>
        </div>
      </div>
      <a
        className="inline-flex items-center gap-1.5 text-primary font-label-md text-label-md uppercase tracking-wider font-semibold hover:gap-3 transition-all duration-200"
        href="#job-inquiry"
      >
        View Role
        <Icon name="arrow_forward" className="text-[16px]" />
      </a>
    </div>
  )
}

function OpenOpportunities() {
  const [active, setActive] = useState("All Roles")
  const [activeType, setActiveType] = useState(jobTypes[0])

  const visibleRoles =
    active === "All Roles"
      ? roleDefinitions
      : roleDefinitions.filter((r) => r.cat === active)

  const sections = jobTypes
    .filter((t) => activeType === t)
    .map((type) => ({
      type,
      rows: visibleRoles.map((r) => ({ ...r, type })),
    }))

  const sectionsToRender = sections.filter((s) => s.rows.length > 0)

  return (
    <section className="w-full py-space-2xl lg:py-28" id="open-roles">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
            Open Opportunities
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            Find Your Next Problem to Solve.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Explore current opportunities to join our team and contribute to
            meaningful work.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-space-md">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 ${
                active === f
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-space-xl border-t border-outline-variant/20 pt-space-md">
          {jobTypes.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200 ${
                activeType === t
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {sectionsToRender.length === 0 && (
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 p-space-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              No open roles match this combination right now.
            </p>
          </div>
        )}

        {sectionsToRender.map((section) => (
          <div key={section.type} className="mb-space-xl last:mb-0">
            <div className="flex items-center gap-3 mb-space-md px-1">
              <span className="font-label-md text-label-md text-on-surface uppercase tracking-widest font-semibold">
                {section.type}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                {section.rows.length} {section.rows.length === 1 ? "Role" : "Roles"}
              </span>
              <div className="flex-1 h-px bg-outline-variant/20"></div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/20">
              {section.rows.map((job, index) => (
                <JobRow
                  key={`${job.title}-${job.type}`}
                  job={job}
                  last={index === section.rows.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function JobInquiry() {
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    openMailto({
      to: "inquiries@axis.research",
      subject: `Job Inquiry — ${form.name.value || "(name not given)"}`,
      body: [
        "Name:",
        form.name.value,
        "",
        "Email:",
        form.email.value,
        "",
        "Role of interest:",
        form.role.value || "(not specified)",
        "",
        "Message:",
        form.message.value,
      ].join("\n"),
    })
    setStatus("success")
  }

  return (
    <section className="w-full py-space-2xl bg-surface-container-low/50" id="job-inquiry">
      <div className="container-research">
        <div className="clay p-space-2xl lg:p-16">
          <div className="text-center flex flex-col items-center mb-space-xl">
            <div className="w-12 h-1 rounded-full bg-primary mb-space-xl"></div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight max-w-2xl">
              Don’t See the Right Role Yet?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed mt-space-md">
              We are always interested in meeting curious people who can bring
              valuable skills and perspectives to our work. If there is no current
              role that matches your profile, tell us how you would like to
              contribute.
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-space-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div>
                <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  name="name"
                  className={inputClass}
                  placeholder="Your full name"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  name="email"
                  className={inputClass}
                  placeholder="you@institution.org"
                  required
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                Role of interest <span className="text-on-surface-variant">(optional)</span>
              </label>
              <input
                name="role"
                className={inputClass}
                placeholder="e.g. Field Researcher, Data Engineer, Designer"
                type="text"
              />
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
                How would you like to contribute?
              </label>
              <textarea
                name="message"
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your skills, perspective, and the problems you care about..."
                required
                rows="5"
              ></textarea>
            </div>

            {/* Honeypot — hidden from humans, filled by bots. Ignore it. */}
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Reviewed by the people, not a form system.
              </p>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-9 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Job Inquiry"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="mt-space-md max-w-2xl mx-auto p-space-md rounded-lg bg-emerald-50 text-emerald-800 font-body-sm text-body-sm flex items-center gap-2">
              <Icon name="check_circle" className="text-[20px] text-emerald-600" />
              Inquiry sent. We read everything and respond when your profile matches ongoing work.
            </div>
          )}
          {status === "error" && (
            <div className="mt-space-md max-w-2xl mx-auto p-space-md rounded-lg bg-error-container/50 text-on-error-container font-body-sm text-body-sm flex items-center gap-2">
              <Icon name="error" className="text-[20px]" />
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function CareersFinalCTA() {
  return (
    <section className="w-full py-space-2xl lg:py-32 bg-[#0B0F19] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1d4ed8]/30 blur-[140px]"></div>
      </div>
      <div className="container-research relative z-10 flex flex-col items-center text-center">
        <h2 className="font-display text-headline-lg-mobile md:text-headline-lg lg:text-[44px] lg:leading-[1.15] font-bold tracking-tight max-w-4xl">
          The Next Important Problem Could Need Your Perspective.
        </h2>
        <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl leading-relaxed mt-space-md">
          Join us as we discover meaningful problems, understand them deeply and
          build practical solutions that actually work.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-xl">
          <a
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            href="#open-roles"
          >
            Join Us
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-label-md text-label-md uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-200"
            href="#career-paths"
          >
            Start Your Career
            <Icon name="arrow_forward" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareersManifesto />
      <CareerPaths />
      <Disciplines />
      <ProcessSection />
      <OpenOpportunities />
      <JobInquiry />
      <CareersFinalCTA />
    </main>
  )
}
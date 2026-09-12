import { useState } from "react"
import { openMailto } from "../../lib/mailto"

const protocol = [
  "Problem Detection & Intake",
  "Research & Investigation",
  "Root-Cause Analysis",
  "Solution Design",
  "Prototype Development",
  "Testing & Validation",
  "Improvement",
  "Implementation",
  "Scale & Impact",
]

const taxonomy = [
  "Telecommunications, Cybersecurity & AI/Robotics",
  "Agriculture, Dairy & Food Supply",
  "Water Management",
  "Healthcare, Elder Care & Child Care",
  "Education & Skilling",
  "Energy, Electricity Distribution & Renewables",
  "Transportation, Traffic & Logistics",
  "Construction, Housing & Urban Planning",
  "Manufacturing & MSME/Small Business Operations",
  "Waste Management & Pollution",
  "Climate Adaptation & Disaster Management",
  "Finance, Banking & Insurance",
  "Government Services & Public Safety",
  "Employment & Skilled Labor",
  "Retail & Supply Chains",
  "Mining, Defense & Space",
  "Rural Development & Tourism",
  "Cross-Cutting & Frontier Problems",
]

const governance = [
  "Peer-Reviewed Research",
  "Research Publications",
  "Government Partnership Gateway",
  "Impact Metrics & Baselines",
  "Research Methodology",
  "Ethical Problem Governance",
  "Institutional Briefings",
]

const bottomLinks = ["Public Registry", "Ethical Problem Governance", "Disclosures"]

function SectionLabel({ children }) {
  return (
    <h3 className="font-label-sm text-label-sm text-[#6E86B8] uppercase tracking-widest font-semibold mb-6">
      {children}
    </h3>
  )
}

function FooterLink({ children }) {
  return (
    <a
      href="#"
      className="inline-block py-1 text-[13px] leading-relaxed text-[#98A1B3] hover:text-white transition-colors duration-150"
    >
      {children}
    </a>
  )
}

export default function SiteFooter() {
  const [notice, setNotice] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    const form = e.currentTarget

    openMailto({
      to: "inquiries@axis.research",
      subject: "Research Dispatch Subscription",
      body: [
        "Please add this email to the Research Dispatch list:",
        form.email.value,
      ].join("\n"),
    })
    setNotice(true)
  }

  return (
    <footer className="w-full bg-[#0B0F19] text-[#98A1B3]">
      <div className="container-research py-16 lg:py-20">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-14 lg:gap-x-12">
          {/* Column 1 — Company Identity */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full border border-[#4668D8]/60 bg-white/5 p-[3px] flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="AXIS.RESEARCH"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="font-display text-xl font-bold text-white tracking-tight">
AXIS.RESEARCH
              </span>
            </div>

            <p className="mt-8 font-sans italic font-light text-[24px] lg:text-[28px] leading-[1.35] text-[#C9CFDC] max-w-sm">
              Find problems worth solving.
              <br />
              Understand them deeply.
              <br />
              Build solutions that actually work.
            </p>

            <p className="mt-8 text-[14px] leading-relaxed text-[#98A1B3] max-w-sm">
              A problem-first research and innovation organization investigating
              real-world challenges and developing practical solutions.
            </p>

            <div className="mt-10">
              <p className="font-label-sm text-label-sm text-[#6E86B8] uppercase tracking-widest font-semibold mb-3">
                Research Dispatch
              </p>
              <form
                className="flex items-stretch gap-2 max-w-sm"
                onSubmit={handleSubscribe}
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="researcher@institution.org"
                  className="h-11 w-full min-w-0 bg-white/[0.04] border border-white/10 rounded-md px-3.5 text-[13px] text-white placeholder:text-[#5A6278] focus:outline-none focus:border-[#4668D8] focus:ring-1 focus:ring-[#4668D8] transition-colors"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 px-5 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/[0.12] transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-[11px] text-[#6E768B]">
                {notice
                  ? "Your email app should have opened — send it to confirm your subscription."
                  : "Stay informed about problems, research and solutions. Zero marketing noise."}
              </p>
            </div>
          </div>

          {/* Column 2 — Operating Model */}
          <div className="lg:col-span-3">
            <SectionLabel>Operating Protocol</SectionLabel>
            <ul className="space-y-2.5">
              {protocol.map((item, i) => (
                <li key={item} className="flex items-baseline gap-3">
                  <span className="font-display text-[10px] tracking-wide text-[#6E8BFF]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#5A6278]">·</span>
                  <span className="text-[13px] text-[#98A1B3]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Problem Taxonomy */}
          <div className="lg:col-span-2">
            <SectionLabel>Problem Taxonomy</SectionLabel>
            <ul className="space-y-0.5">
              {taxonomy.map((item) => (
                <li key={item}>
                  <FooterLink>{item}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Research & Governance */}
          <div className="lg:col-span-3">
            <SectionLabel>Research &amp; Governance</SectionLabel>
            <ul className="space-y-0.5">
              {governance.map((item) => (
                <li key={item}>
                  <FooterLink>{item}</FooterLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-white/[0.04] border border-white/10 p-5 max-w-sm">
              <p className="font-label-sm text-label-sm text-[#6E8BFF] uppercase tracking-widest font-semibold">
                Open Repository
              </p>
              <p className="mt-2.5 text-[12px] leading-relaxed text-[#98A1B3]">
                Empirical problem statements, root-cause research, field
                evidence and validation datasets.
              </p>
              <a
                href="#"
                className="mt-3.5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-white hover:text-[#6E8BFF] transition-colors duration-150"
              >
                Explore Repository
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 lg:mt-20 border-t border-white/[0.08]"></div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-label-sm text-label-sm text-[#6E768B] tracking-[0.08em]">
            © 2026 AXIS.RESEARCH
          </p>
          <p className="font-label-sm text-label-sm text-[#5A6278] tracking-[0.08em]">
            Applied Problem Research &amp; Solutions Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {bottomLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="font-label-sm text-label-sm text-[#6E768B] tracking-[0.08em] hover:text-white transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
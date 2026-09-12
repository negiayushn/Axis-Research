import Icon from "../Icon"
import { openMailto, inputClass } from "../../lib/mailto"

const channels = [
  {
    icon: "mail",
    title: "Field Research Desk",
    desc: "Direct correspondence for open inquiries, partnerships, and evidence submissions.",
    value: "inquiries@axis.research",
    href: "mailto:inquiries@axis.research",
  },
  {
    icon: "share",
    title: "LinkedIn & Networks",
    desc: "Follow our research, connect with the team and share problems worth solving.",
    links: [
      { label: "LinkedIn", value: "/company/axis-research", href: "https://www.linkedin.com/company/axis-research" },
      { label: "X", value: "@axisresearch", href: "https://x.com/axisresearch" },
    ],
  },
  {
    icon: "support_agent",
    title: "Customer Support",
    desc: "Resolve technical issues, access requests, and account-related help. Available 24/7.",
    value: "support@axis.research",
    href: "mailto:support@axis.research",
  },
]

export default function Contact() {
  return (
    <section className="w-full py-space-2xl" id="contact">
      <div className="container-research">
        <div className="max-w-2xl mb-space-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
            Contact
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            Open a Line of Inquiry.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Reach the strategic inquiry desk directly. Every message is logged
            against the Axis Open Inquiry Charter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {channels.map((channel) => {
            const cardClass =
              "clay p-space-xl flex flex-col justify-between h-full group"
            if (channel.links) {
              return (
                <div key={channel.title} className={cardClass}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-lg group-hover:scale-110 transition-transform duration-200">
                      <Icon name={channel.icon} className="text-[28px]" />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                      {channel.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                      {channel.desc}
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                    <ul className="flex flex-col">
                      {channel.links.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/item flex items-center justify-between gap-2 py-1.5"
                          >
                            <span className="font-label-md text-label-md text-on-surface font-semibold">
                              {l.label}
                            </span>
                            <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                              {l.value}
                              <Icon
                                name="north_east"
                                className="text-[14px] text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform duration-150"
                              />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            }
            return (
              <a
                key={channel.title}
                href={channel.href}
                className={cardClass}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-space-lg group-hover:scale-110 transition-transform duration-200">
                    <Icon name={channel.icon} className="text-[28px]" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                    {channel.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    {channel.desc}
                  </p>
                </div>
                <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-outline-variant/20">
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    {channel.value}
                  </span>
                  <Icon name="north_east" className="text-[16px] text-primary" />
                </div>
              </a>
            )
          })}
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    openMailto({
      to: "inquiries@axis.research",
      subject: form.subject.value || "Website Inquiry",
      body: [
        "Name:",
        form.name.value,
        "",
        "Email:",
        form.email.value,
        "",
        "Subject:",
        form.subject.value || "(none)",
        "",
        "Message:",
        form.message.value,
      ].join("\n"),
    })
  }

  return (
    <div className="mt-space-2xl">
      <div className="max-w-2xl mb-space-xl">
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
          Write to the Inquiry Desk.
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Use this form for anything that does not fit the field desks. Your
          message is delivered straight to the strategic inquiry desk.
        </p>
      </div>
      <div className="clay p-space-xl md:p-12">
        <form className="space-y-space-lg" onSubmit={handleSubmit}>
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
              Subject
            </label>
            <input
              name="subject"
              className={inputClass}
              placeholder="What is this about?"
              type="text"
            />
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              className={`${inputClass} resize-none`}
              placeholder="Describe your inquiry in detail..."
              required
              rows="5"
            ></textarea>
          </div>

          <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Submitting opens your email app with everything filled in — then you
              just hit send.
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
  )
}
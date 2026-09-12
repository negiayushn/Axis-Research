import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "../Icon"

const navLinks = [
  { label: "Home", href: "/", path: "home", route: true },
  { label: "Explore Problems", href: "/problems", path: "explore-problems", route: true },
  { label: "Research", href: "/#current-inquiries", path: "research", route: true },
  { label: "Services", href: "/#services", path: "services", route: true },
  { label: "Careers", href: "/careers", path: "careers", route: true },
  { label: "About", href: "/about", path: "about", route: true },
  { label: "Contact", href: "/#contact", path: "contact", route: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/20">
      <div className="container-research">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-surface-container-low/80 p-[3px] flex items-center justify-center transition-colors duration-200">
              <img
                src="/logo.png"
                alt="AXIS.RESEARCH"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </span>
            <span className="font-display font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
              AXIS<span className="text-primary">.RESEARCH</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-7">
            {navLinks.map((link) =>
              link.route ? (
                <Link
                  key={link.path}
                  className="font-label-md text-label-md font-medium text-on-surface hover:text-primary uppercase tracking-wider transition-colors"
                  to={link.href}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.path}
                  className="font-label-md text-label-md font-medium text-on-surface hover:text-primary uppercase tracking-wider transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              className="hidden lg:inline-flex whitespace-nowrap items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-3 rounded-full shadow-sm transition-all duration-200"
              to="/#intake"
            >
              Submit a Problem
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-outline-variant/20 bg-surface-container-lowest/95 backdrop-blur-md">
          <nav className="container-research py-space-md flex flex-col">
            {navLinks.map((link) =>
              link.route ? (
                <Link
                  key={link.path}
                  className="py-3 font-label-md text-label-md font-medium text-on-surface uppercase tracking-wider transition-colors border-b border-outline-variant/10 last:border-0"
                  to={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.path}
                  className="py-3 font-label-md text-label-md font-medium text-on-surface uppercase tracking-wider transition-colors border-b border-outline-variant/10 last:border-0"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              className="mt-space-md inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-3 rounded-full shadow-sm transition-all duration-200"
              to="/#intake"
              onClick={() => setOpen(false)}
            >
              Submit a Problem
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
import { Link } from "react-router-dom"
import ProblemCard from "../ProblemCard"
import { problems } from "../../data/problems"
import Icon from "../Icon"
import Reveal from "../Reveal"

export default function FeaturedProblems() {
  const featured = problems.slice(0, 3)

  return (
    <section className="w-full py-space-2xl" id="current-inquiries">
      <div className="container-research">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-space-xs font-semibold">
              Current Inquiries
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
              Explore Problems in Progress.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Active investigations currently undergoing field research and
            prototyping.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {featured.map((problem, i) => (
            <Reveal key={problem.id} delay={i * 100} className="h-full">
              <ProblemCard problem={problem} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-space-2xl text-center">
          <Link
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            to="/problems"
          >
            More
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
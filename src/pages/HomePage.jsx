import Hero from "../components/sections/Hero"
import Approach from "../components/sections/Approach"
import Domains from "../components/sections/Domains"
import Services from "../components/sections/Services"
import Methodology from "../components/sections/Methodology"
import DarkInversion from "../components/sections/DarkInversion"
import FeaturedProblems from "../components/sections/FeaturedProblems"
import EditorialStatement from "../components/sections/EditorialStatement"
import SubmitProblem from "../components/sections/SubmitProblem"
import FinalCTA from "../components/sections/FinalCTA"
import Contact from "../components/sections/Contact"
import Reveal from "../components/Reveal"

export default function HomePage() {
  return (
    <>
      <Reveal className="w-full">
        <Hero />
      </Reveal>
      <Reveal className="w-full" delay={60}>
        <Approach />
      </Reveal>
      <Reveal className="w-full" delay={80} translate="translate-y-10">
        <Domains />
      </Reveal>
      <Reveal className="w-full" delay={60}>
        <Services />
      </Reveal>
      <Reveal className="w-full" delay={80}>
        <Methodology />
      </Reveal>
      <Reveal className="w-full" delay={60} translate="translate-y-10">
        <DarkInversion />
      </Reveal>
      <Reveal className="w-full" delay={80}>
        <FeaturedProblems />
      </Reveal>
      <Reveal className="w-full" delay={60}>
        <EditorialStatement />
      </Reveal>
      <Reveal className="w-full" delay={80}>
        <SubmitProblem />
      </Reveal>
      <Reveal className="w-full" delay={60}>
        <FinalCTA />
      </Reveal>
      <Reveal className="w-full" delay={80} translate="translate-y-10">
        <Contact />
      </Reveal>
    </>
  )
}
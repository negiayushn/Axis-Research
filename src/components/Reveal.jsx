import useInView from "../hooks/useInView"

export default function Reveal({
  children,
  className = "",
  delay = 0,
  translate = "translate-y-7",
  duration = 700,
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-[opacity,transform] ${
        inView ? "opacity-100 translate-y-0" : `opacity-0 ${translate}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
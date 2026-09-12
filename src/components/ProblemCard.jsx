import Icon from "./Icon"

export default function ProblemCard({ problem }) {
  return (
    <div className="clay p-space-xl flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <span
            className={`px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold uppercase tracking-wider ${problem.tagClass}`}
          >
            {problem.tag}
          </span>
          <div
            className={`flex items-center gap-1.5 font-label-sm text-label-sm font-semibold ${problem.statusColor}`}
          >
            <span
              className={`w-2 h-2 rounded-full animate-pulse ${problem.dotColor}`}
            ></span>
            {problem.status}
          </div>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug mb-space-md group-hover:text-primary transition-colors">
          {problem.title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
          {problem.desc}
        </p>
      </div>
      <div>
        <div className="mb-space-md">
          <div className="flex justify-between items-center font-label-sm text-label-sm text-on-surface-variant mb-1.5">
            <span>Phase Progress</span>
            <span className="font-semibold text-on-surface">
              {problem.progress}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${problem.barColor}`}
              style={{ width: `${problem.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="pt-space-md flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <Icon
              name="groups"
              className={`text-[16px] ${problem.backerColor}`}
            />
            {problem.backers.toLocaleString()} Backers
          </span>
          <a
            className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            href="#"
          >
            Dossier{" "}
            <Icon name="arrow_forward" className="text-[14px]" />
          </a>
        </div>
      </div>
    </div>
  )
}
import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  let badgeColor = "border-line bg-surface text-copy";

  if (tech.id === "react") {
    badgeColor = "border-sky-100 bg-sky-50 text-sky-500";
  } else if (tech.id === "vue") {
    badgeColor = "border-green-100 bg-green-50 text-green-600";
  } else if (tech.id === "svelte") {
    badgeColor = "border-orange-100 bg-orange-50 text-orange-600";
  } else if (tech.id === "nextjs") {
    badgeColor = "border-gray-200 bg-gray-100 text-gray-700";
  } else if (tech.id === "nodejs") {
    badgeColor = "border-green-100 bg-green-50 text-green-600";
  } else if (tech.id === "postgresql") {
    badgeColor = "border-blue-100 bg-blue-50 text-blue-600";
  } else if (tech.id === "redis") {
    badgeColor = "border-red-100 bg-red-50 text-red-600";
  } else if (tech.id === "javascript") {
    badgeColor = "border-yellow-100 bg-yellow-50 text-yellow-700";
  } else if (tech.id === "typescript") {
    badgeColor = "border-blue-100 bg-blue-50 text-blue-600";
  } else if (tech.id === "java") {
    badgeColor = "border-sky-100 bg-sky-50 text-sky-600";
  } else if (tech.id === "tailwind") {
    badgeColor = "border-cyan-100 bg-cyan-50 text-cyan-600";
  } else if (tech.id === "docker") {
    badgeColor = "border-blue-100 bg-blue-50 text-blue-600";
  }

  return (
    <article className="grid h-full min-h-[235px] grid-rows-[auto_auto_1fr_auto_auto] gap-2 rounded-xl border border-line bg-white p-4 font-sans shadow-sm transition hover:shadow-md lg:min-h-0">
      <div className="grid grid-cols-[auto_1fr] items-center">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-7 w-7 object-contain"
        />

        <span
          className={`badge badge-sm justify-self-end text-[10px] ${badgeColor}`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-2 font-display text-sm font-bold text-ink">
        {tech.name}
      </h3>

      <p className="font-sans text-[11px] leading-[1.6] text-copy">
        {tech.description}
      </p>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1 border-t border-line pt-2 text-[10px]">
        <span className="rounded bg-surface px-2 py-1 text-copy">
          {tech.category}
        </span>

        <span className="min-w-0 text-center text-copy">{tech.difficulty}</span>

        <span className="whitespace-nowrap text-ink">
          <span className="text-star">★</span> {tech.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className="btn btn-sm min-h-8 w-full rounded-md border-none bg-ink text-[11px] font-normal text-white hover:bg-ink-hover disabled:bg-success-soft disabled:text-success-ink disabled:opacity-100"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechCard;

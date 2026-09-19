import { use } from "react";

import type { Technology, TechResult } from "../types";

import TechCard from "./TechCard";

interface TechListProps {
  dataPromise: Promise<TechResult>;
  stack: Technology[];
  onAdd: (tech: Technology) => void;
}

const TechList = ({ dataPromise, stack, onAdd }: TechListProps) => {
  const data = use(dataPromise);

  const technologies = data.technologies;

  const cardStyle = [
    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-start",
    "lg:h-[245px] lg:self-center",

    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-start",

    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-end",

    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-center",
    "lg:h-[245px] lg:self-center",
  ];

  if (data.error) {
    return (
      <p className="py-10 text-center text-sm text-danger">{data.error}</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[270px] lg:grid-cols-3">
      {technologies.map((tech, index) => {
        const isAdded = stack.filter((item) => item.id === tech.id).length > 0;

        return (
          <div
            key={tech.id}
            className={cardStyle[index] || "lg:h-[245px] lg:self-start"}
          >
            <TechCard tech={tech} isAdded={isAdded} onAdd={onAdd} />
          </div>
        );
      })}
    </div>
  );
};

export default TechList;

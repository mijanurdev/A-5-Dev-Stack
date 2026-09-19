import type { Technology, TechResult } from "../types";

import TechList from "./TechList";

interface MainLayoutProps {
  dataPromise: Promise<TechResult>;
  stack: Technology[];
  onAdd: (tech: Technology) => void;
}

const MainLayout = ({ dataPromise, stack, onAdd }: MainLayoutProps) => {
  return (
    <main id="technologies" className="site-container py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>

        <p className="mt-2 font-sans text-sm text-copy">
          Pick technologies to build your ideal stack.
        </p>
      </div>

      <TechList dataPromise={dataPromise} stack={stack} onAdd={onAdd} />
    </main>
  );
};

export default MainLayout;

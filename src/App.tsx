import { Suspense, useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MainLayout from "./Components/MainLayout";
import Loading from "./Components/Loading";

import type { Technology, TechResult } from "./types";

// Fetch Data========

const fetchData = async (): Promise<TechResult> => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);

    if (!response.ok) {
      throw new Error("Failed to load data");
    }

    const data: Technology[] = await response.json();

    return {
      technologies: data,
      error: "",
    };
  } catch (error) {
    console.error(error);

    return {
      technologies: [],
      error: "Failed to load technologies. Please try again.",
    };
  }
};

const dataPromise = fetchData();

const App = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (tech: Technology) => {
    const isAdded = stack.filter((item) => item.id === tech.id).length > 0;

    if (isAdded) {
      return;
    }

    setStack([...stack, tech]);
  };

  return (
    <div className="bg-page text-ink">
      <Navbar />

      <Hero />

      <Suspense
        fallback={
          <main className="site-container py-16">
            <Loading />
          </main>
        }
      >
        <MainLayout dataPromise={dataPromise} stack={stack} onAdd={handleAdd} />
      </Suspense>
    </div>
  );
};

export default App;

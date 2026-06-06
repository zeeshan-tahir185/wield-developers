"use client";

import { useState } from "react";
import { ProjectCard } from "./cards";
import { projects, projectCategories } from "@/lib/projects";

export function ProjectsExplorer() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2.5">
        {projectCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20"
                  : "border border-slate-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={`${p.title}-${p.client}`} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-slate-500">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}

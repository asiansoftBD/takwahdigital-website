"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/db";

const portfolioCategories = [
  "All",
  "Social Media",
  "Advertising",
  "HTML5 Banners",
  "Video",
];

export default function PortfolioClient({
  projects,
}: {
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const isAllSelected = activeCategory === "All";

  return (
    <>
      {/* Category Filters */}
      <div
        className="portfolio-category-scroll flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
        aria-label="Portfolio categories"
      >
        {portfolioCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#2845D6] text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-[#2845D6] hover:text-[#2845D6] hover:shadow-sm"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* All Projects */}
      {isAllSelected && (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      )}

      {/* Filtered Projects - Two or More */}
      {!isAllSelected && filteredProjects.length > 1 && (
        <div className="portfolio-filtered-grid mt-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      )}

      {/* Filtered Projects - Single */}
      {!isAllSelected && filteredProjects.length === 1 && (
        <div className="portfolio-filtered-single mt-12">
          <ProjectCard
            project={filteredProjects[0]}
            index={0}
          />
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
          <h2 className="text-xl font-bold text-[#0D1A63]">
            No projects found
          </h2>

          <p className="mt-3 text-slate-600">
            There are currently no projects in this category.
          </p>
        </div>
      )}
    </>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="portfolio-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:transform-none"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Featured Media */}
<div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
  {project.featured_media_storage_key ? (
    <img
      src={`/api/assets?key=${encodeURIComponent(
        project.featured_media_storage_key
      )}`}
      alt={project.featured_media_alt_text || project.title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
    />
  ) : (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <span className="text-sm font-bold text-[#F68048]">
          {String(project.id).padStart(2, "0")}
        </span>

        <p className="mt-2 text-sm font-medium text-slate-400">
          Portfolio Preview
        </p>
      </div>
    </div>
  )}
</div>

      <div className="p-7">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F68048]">
          {project.category}
        </p>

        <h2 className="mt-3 text-xl font-bold text-[#0D1A63]">
          {project.title}
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          {project.short_description || project.description}
        </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
  <Link
  href={`/portfolio/${project.slug}`}
  className="inline-flex items-center rounded-lg bg-[#2845D6] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1A2CA3] hover:shadow-md"
>
  View Project
  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

 <Link
    href={`/contact?project=${encodeURIComponent(project.title)}`}
    className="inline-flex items-center font-semibold text-[#2845D6] transition hover:text-[#1A2CA3]"
  >
    Discuss a similar project
  </Link>
</div>  
        
  </div>
    </article>
  );
}
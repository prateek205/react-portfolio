import React, { useState } from "react";
import { projects } from "../../db.json";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
  const [active, setActive] = useState("All");

  const categories = ["All", ...new Set(projects.map((item) => item.category))];

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6 md:px-12 lg:px-20 transition-colors duration-300">
      {/* Heading Section */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          My Completed{" "}
          <span className="text-red-600 dark:text-red-500">Projects</span>
        </h1>
        <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto mt-4 rounded-full" />
        <p className="mt-5 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          An overview of applications built with modern frameworks, focusing on
          responsive layout and fluid interactions.
        </p>
      </div>

      {/* Dynamic Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-14 max-w-xl mx-auto">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
              ${
                active === tab
                  ? "bg-red-600 text-white shadow-sm shadow-red-600/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="
              group
              flex flex-col
              bg-white dark:bg-slate-900
              rounded-2xl
              overflow-hidden
              border border-slate-200/60 dark:border-slate-800/60
              shadow-sm hover:shadow-xl
              hover:-translate-y-1.5
              transition-all duration-300"
          >
            {/* Project Image & Floating Category badge */}
            <div className="overflow-hidden relative aspect-video bg-slate-100 dark:bg-slate-800">
              <span
                className="
                absolute top-3 left-3 z-10
                px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase
                rounded-md bg-slate-900/80 backdrop-blur-sm text-white border border-white/10"
              >
                {project.category}
              </span>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>

            {/* Content Body */}
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="mt-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Stack + Links (Sticks uniform at base) */}
              <div className="mt-auto pt-4 flex flex-col gap-5">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stacks.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-2.5 py-1
                        text-xs font-medium
                        rounded-md
                        bg-slate-100 text-slate-700
                        dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      px-4 py-2.5 text-sm font-medium
                      rounded-xl border
                      border-slate-300 dark:border-slate-700
                      text-slate-700 dark:text-slate-300
                      hover:bg-slate-50 dark:hover:bg-slate-800
                      transition-colors duration-200"
                  >
                    <FaGithub className="text-base" />
                    Code
                  </a>

                  <a
                    href={project["live Demo"]}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      px-4 py-2.5 text-sm font-medium
                      rounded-xl
                      bg-red-600 text-white
                      hover:bg-red-700 active:bg-red-800
                      shadow-sm shadow-red-600/10
                      transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;

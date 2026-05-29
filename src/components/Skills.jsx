import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Vite",
    "Tailwind CSS",
    "Postman",
    "Netlify",
  ];

  return (
  <section className="w-full py-10">
    <div
      className="max-w-6xl mx-auto rounded-2xl
      bg-white dark:bg-gray-800
      shadow-[0_0_20px_rgba(0,0,0,0.15)]
      dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]
      p-8"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="text-red-600">Skills</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Technologies and tools I work with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {skills.map((item, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center
              px-4 py-3
              rounded-xl
              border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-900
              hover:bg-red-600
              hover:text-white
              hover:scale-105
              transition-all duration-300
              cursor-pointer
              font-medium
              shadow-sm
            "
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Skills;

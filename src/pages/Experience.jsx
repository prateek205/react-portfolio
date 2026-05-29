import React from "react";
import Skills from "../components/Skills";

const Experience = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-20 text-black dark:text-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Experience & <span className="text-red-600">Education</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3">
          My professional journey and academic background.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience */}
        <div
          className="
        group
        bg-white dark:bg-gray-800
        rounded-2xl
        border-t-4 border-red-600
        shadow-lg
        hover:-translate-y-2
        duration-300
        p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">💼</span>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <h3 className="text-2xl font-semibold text-red-600">
            Frontend Developer Intern
          </h3>

          <p className="font-medium text-gray-500 dark:text-gray-400 mb-5">
            Tech Surya • Present
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3">
              <span>🚀</span>
              <p>Working on real-world web development projects.</p>
            </li>

            <li className="flex gap-3">
              <span>⚛️</span>
              <p>Building responsive applications using React.js.</p>
            </li>

            <li className="flex gap-3">
              <span>🧩</span>
              <p>Creating reusable React components and modern UI layouts.</p>
            </li>

            <li className="flex gap-3">
              <span>🤝</span>
              <p>Learning team collaboration, debugging, and workflows.</p>
            </li>

            <li className="flex gap-3">
              <span>📚</span>
              <p>Enhancing MERN Stack development skills.</p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div
          className="
        group
        bg-white dark:bg-gray-800
        rounded-2xl
        border-t-4 border-cyan-500
        shadow-lg
        hover:-translate-y-2
        duration-300
        p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🎓</span>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <h3 className="text-2xl font-semibold text-cyan-500">
            Bachelor of Technology
          </h3>

          <p className="font-medium text-gray-500 dark:text-gray-400 mb-5">
            Mechanical Engineering
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3">
              <span>✅</span>
              <p>Completed B.Tech in Mechanical Engineering.</p>
            </li>

            <li className="flex gap-3">
              <span>🧠</span>
              <p>
                Developed analytical thinking, problem-solving and technical
                skills.
              </p>
            </li>

            <li className="flex gap-3">
              <span>💻</span>
              <p>
                Transitioned passion into software development and web
                technologies.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <Skills />
      </div>
    </section>
  );
};

export default Experience;

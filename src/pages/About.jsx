import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              About <span className="text-red-600">Me</span>
            </h1>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-3"></div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Get to know more about my journey, skills, and passion for web
            development.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
            Hello! I'm{" "}
            <span className="font-semibold text-red-600">Prateek</span>, a
            passionate MERN Stack Developer with experience in building modern,
            responsive, and user-friendly web applications using React.js,
            Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
            I enjoy transforming ideas into real-world projects, creating clean
            user interfaces, developing REST APIs, and solving coding
            challenges. My goal is to continuously learn new technologies and
            build impactful digital experiences.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
            I am always eager to improve my coding skills, explore new tools,
            and stay updated with the latest trends in web development while
            growing as a professional software developer.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl shadow-md dark:bg-gray-800 text-center">
              <h2 className="text-3xl font-bold text-red-600">10+</h2>
              <p className="text-gray-600 dark:text-gray-300">Projects</p>
            </div>

            <div className="p-4 rounded-xl shadow-md dark:bg-gray-800 text-center">
              <h2 className="text-3xl font-bold text-cyan-500">MERN</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div
            className="
          relative
          rounded-3xl
          overflow-hidden
          shadow-2xl
          hover:scale-105
          duration-300"
          >
            <img
              src="/about-image.avif"
              alt="About"
              className="w-full max-w-md object-cover"
            />

            {/* Decorative Border */}
            <div className="absolute inset-0 border-4 border-red-600 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

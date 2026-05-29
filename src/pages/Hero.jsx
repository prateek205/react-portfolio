import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Hello, I'm 👋
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Prateek Bahad
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            MERN Stack Developer
          </h2>

          <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400 leading-8">
            I build modern, responsive and dynamic web applications using
            React.js, Node.js, Express.js, MongoDB and Tailwind CSS. Passionate
            about creating clean UI and scalable web solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              className="
            px-8 py-3
            bg-red-600
            hover:bg-red-700
            text-white
            rounded-xl
            font-medium
            shadow-lg
            hover:scale-105
            duration-300"
            >
              Hire Me
            </button>

            <button
              className="
            px-8 py-3
            border-2 border-red-600
            text-red-600
            dark:text-red-400
            rounded-xl
            font-medium
            hover:bg-red-600
            hover:text-white
            duration-300"
            >
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 justify-center lg:justify-start pt-3">
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              className="
            p-3 rounded-full
            bg-blue-100 dark:bg-gray-800
            hover:scale-110
            duration-300"
            >
              <GrLinkedinOption className="text-2xl text-blue-600" />
            </Link>

            <Link
              to="https://github.com"
              target="_blank"
              className="
            p-3 rounded-full
            bg-gray-100 dark:bg-gray-800
            hover:scale-110
            duration-300"
            >
              <ImGithub className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div
              className="
            absolute
            inset-0
            bg-red-500/20
            blur-3xl
            rounded-full
            scale-110"
            ></div>

            <img
              src="/profile-image.png"
              alt="Prateek Bahad"
              className="
            relative
            w-72 h-72
            md:w-96 md:h-96
            object-cover
            rounded-full
            border-8 border-white
            dark:border-gray-700
            shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

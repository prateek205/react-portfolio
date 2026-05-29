import React from "react";
import { FaHeart, FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-red-600">Prateek</span> Bahad
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            MERN Stack Developer
          </p>
        </div>

        {/* Center */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/prateek205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 hover:scale-110 duration-300"
          >
            <ImGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prateek-bahad-a1b985167/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-3">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
          Made with
          <FaHeart className="text-red-500 animate-pulse" />
          by <span className="font-semibold">Prateek Bahad</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

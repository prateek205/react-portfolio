import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill, BsSun } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { GoMoon } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { myContext } from "../context/ThemeContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme, handleToggle } = myContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        <Link to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight cursor-pointer">
            <span className="text-red-600">My</span>
            <span className="text-gray-800 dark:text-white">Portfolio</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors py-2"
              >
                <AiFillHome className="text-lg" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors py-2"
              >
                <BsInfoCircleFill className="text-base" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors py-2"
              >
                <MdOutlineWorkOutline className="text-lg" />
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors py-2"
              >
                <RiContactsBook3Fill className="text-lg" />
                Contact
              </Link>
            </li>
          </ul>

          <div
            className="h-5 w-px bg-gray-200 dark:bg-gray-800"
            aria-hidden="true"
          />

          <button
            onClick={handleToggle}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-all cursor-pointer active:scale-95"
            aria-label="Toggle layout theme"
          >
            {theme ? (
              <BsSun className="text-yellow-500 text-lg" />
            ) : (
              <GoMoon className="text-indigo-500 text-lg" />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleToggle}
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
            aria-label="Toggle layout theme"
          >
            {theme ? (
              <BsSun className="text-yellow-500 text-lg" />
            ) : (
              <GoMoon className="text-indigo-500 text-lg" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Main menu panel toggle"
          >
            {isOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 shadow-inner">
          <nav
            className="px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile Navigation Drawer"
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-red-600 dark:hover:text-red-400 transition-all"
            >
              <AiFillHome className="text-xl text-gray-400" />
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-red-600 dark:hover:text-red-400 transition-all"
            >
              <BsInfoCircleFill className="text-lg text-gray-400" />
              About
            </Link>

            <Link
              to="/experience"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-red-600 dark:hover:text-red-400 transition-all"
            >
              <MdOutlineWorkOutline className="text-xl text-gray-400" />
              Experience
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-red-600 dark:hover:text-red-400 transition-all"
            >
              <RiContactsBook3Fill className="text-xl text-gray-400" />
              Contact
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

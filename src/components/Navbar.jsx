import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { GoMoon } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { myContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme, handleToggle } = myContext();

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700
    bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl md:text-4xl font-bold cursor-pointer">
            <span className="text-red-600">My</span>
            <span className="text-gray-800 dark:text-white">Portfolio</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6 text-md font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-red-600 duration-300"
              >
                <AiFillHome className="text-lg" />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:text-red-600 duration-300"
              >
                <FcAbout className="text-lg" />
                About
              </Link>
            </li>

            <li>
              <Link
                to="/experience"
                className="flex items-center gap-2 hover:text-red-600 duration-300"
              >
                <MdOutlineWorkOutline className="text-lg" />
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-red-600 duration-300"
              >
                <RiContactsBook3Fill className="text-lg" />
                Contact
              </Link>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="w-11 h-11 rounded-full flex items-center justify-center
          bg-gray-100 dark:bg-gray-800
          hover:scale-110 hover:bg-red-100 dark:hover:bg-red-900
          duration-300 shadow-md"
          >
            {theme ? (
              <BsSun className="text-yellow-500 text-xl" />
            ) : (
              <GoMoon className="text-blue-500 text-xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

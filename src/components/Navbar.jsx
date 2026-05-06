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
    <div
      id="navbar"
      className="flex items-center justify-between relative z-10 px-5 w-full h-20 shadow-lg shadow-gray-500 bg-white text-black dark:bg-gray-900 dark:text-white duration-300"
    >
      <h1 className="text-4xl">My Portfolio</h1>
      <div className="flex items-center gap-5">
        <ul className="flex gap-5 text-lg">
          <li>
            <Link to="/" className="hover:text-red-600 flex items-center gap-2">
              <AiFillHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-red-600 flex items-center gap-2"
            >
              <FcAbout /> About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:text-red-600 flex items-center gap-2"
            >
              <MdOutlineWorkOutline /> Experience
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-red-600 flex items-center gap-2"
            >
              <RiContactsBook3Fill /> Contact
            </Link>
          </li>
        </ul>
        <button onClick={handleToggle} className="flex gap-2 text-xl">
          {theme ? <BsSun /> : <GoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

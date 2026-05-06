import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center justify-between gap-2 px-5 py-8 h-screen w-full bg-white dark:bg-gray-700 text-black dark:text-white duration-300">
        <div className="h-full w-full flex items-start justify-center flex-col gap-8">
          <div className="flex flex-col gap-5 px-8">
            <p className="text-2xl">Hello, I'm 👋</p>
            <h1 className="text-7xl uppercase w-full">Prateek Bahad</h1>
            <h2 className="text-2xl font-bold w-1/2">
              MERN Stack Web Developer
            </h2>
            <p className="text-lg">
              I build the modern, Dynamic and Responsive web application using
              the React,Node.js,Tailwind css
            </p>
          </div>
          <div className="flex gap-5 px-8">
            <button className="border-2 border-gray-600 rounded-md dark:border-gray-300 py-1 px-4 text-lg bg-gray-800 text-white hover:bg-gray-600 ">
              Hire Me
            </button>
            <button className="border-2 border-gray-600 rounded-md dark:border-gray-300 py-1 px-4 text-lg ">
              View Project
            </button>
          </div>
          <div className="flex px-8 gap-5 text-2xl">
            <Link
              to="https://www.linkedin.com/in/prateek-bahad-a1b985167/"
              target="_blank"
              className="text-blue-500 dark:text-white"
            >
              <GrLinkedinOption />
            </Link>
            <Link to="https://github.com/prateek205" target="_blank">
              <ImGithub />
            </Link>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="h-full flex items-center justify-center ">
            <img
              src="/profile-image.png"
              alt=""
              className="object-contain w-96 h-96 rounded-full border-8 border-white shadow-[0_0_50px_rgba(50,50,50,0.6)] dark:border-white dark:shadow-[0_0_30px_rgba(250,250,250,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Skills from "../components/Skills";

const Experience = () => {
  return (
    <section className="h-screen flex flex-col gap-5 bg-white dark:bg-gray-700 py-8 px-20">
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-5 w-full rounded-md h-96 py-6 px-7 shadow-[0_0_10px_rgb(50,50,50)] dark:shadow-[0_0_10px_rgb(250,250,250)]">
          <h1 className="text-4xl text-center">Experience</h1>
          <h2 className="text-2xl">Frontend Developer</h2>
          <p className="font-bold">Tech Surya | Present</p>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <span>✅</span>
              <p>
                Working as an intern on real-world web development projects.
              </p>
            </li>
            <li className="flex gap-2">
              <span>✅</span>{" "}
              <p>
                Build a responsive web application and website using React.js
              </p>
            </li>
            <li className="flex gap-2">
              <span>✅</span>{" "}
              <p>Create the reusable react component and modern layouts.</p>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <p>
                Learning the Industrial workflow, debugging and team
                collaboration.
              </p>
            </li>
            <li className="flex gap-2">
              <span>✅</span> <p>Improving skills in MERN Stack development.</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 w-full h-96 rounded-md py-6 px-7 shadow-[0_0_10px_rgb(50,50,50)] dark:shadow-[0_0_10px_rgb(250,250,250)]">
          <h1 className="text-4xl text-center">Education</h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl">Bachelor of Technology (B.Tech)</h2>
            <p className="font-bold">Mechanical Engineering</p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2">
                <span>✅</span>
                <p>Completed the BTech in Mechanical Engineering.</p>
              </li>
              <li className="flex gap-2">
                <span>✅</span>{" "}
                <p>
                  Developed the Analytical thinking,problem solving, technical
                  skills.
                </p>
              </li>
              <li className="flex gap-2">
                <span>✅</span>{" "}
                <p>
                  Transition passion into software development and web
                  technologies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </section>
  );
};

export default Experience;

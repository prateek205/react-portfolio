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
    <section>
      <div className="shadow-[0_0_10px_rgb(50,50,50)] dark:shadow-[0_0_10px_rgb(250,250,250)] h-80 flex flex-col gap-5 items-center justify-start py-5 rounded-md">
        <h1 className="text-4xl">Skills</h1>
        <div className="grid grid-cols-5 h-full w-full py-5 px-10">
          {skills.map((items, index) => {
            return (
              <div key={index}>
                <ul className="text-xl">
                  <li className="hover:text-red-900 hover:font-bold dark:hover:text-gray-900 cursor-pointer">
                    ✅ {items}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

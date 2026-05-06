import React from "react";

const About = () => {
  return (
    <section className="h-screen flex items-start justify-center flex-col gap-5 p-10 bg-white dark:bg-gray-700 dark:text-white">
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="text-4xl">About Me</h1>
        <p className="text-lg text-black dark:text-gray-300">
          Get to know more about my journey, skills, and passion for web
          development.
        </p>
        <p className="text-lg text-black dark:text-gray-300 text-center h-24">
          Hello! I'm Prateek, a passionate MERN Stack Developer with experience
          in building modern, responsive, and user-friendly web applications
          using React.js, Node.js, Express.js, and MongoDB. I enjoy turning
          ideas into real-world projects, creating clean UI, and solving coding
          challenges. My goal is to continuously learn new technologies and
          build impactful digital experiences.
        </p>
        <p className="text-lg text-center h-24 text-black dark:text-gray-300">
          I enjoy creating attractive user interfaces, developing REST APIs,
          managing databases, and turning ideas into fully functional digital
          products. I am always eager to learn new technologies, improve my
          coding skills, and stay updated with the latest trends in web
          development. My goal is to work on innovative projects, solve
          real-world problems, and grow as a professional software developer.
        </p>
      </div>
      <div className="flex items-center justify-center h-1/2 w-full">
        <img
          src="/about-image.avif"
          alt=""
          className="flex items-center justify-center"
        />
      </div>
    </section>
  );
};

export default About;

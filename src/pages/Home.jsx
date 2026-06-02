import React from "react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <section>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
};

export default Home;

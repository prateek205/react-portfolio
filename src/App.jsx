import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Home from "./pages/Home";

const App = () => {
  return (
    <section className="h-screen w-full bg-white dark:bg-black text-black dark:text-white durantion-300">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project/>}/>
      </Routes>
      <Footer/>
    </section>
  );
};

export default App;

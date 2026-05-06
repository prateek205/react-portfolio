import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative z-10 flex items-center justify-center py-2 dark:bg-gray-900 dark:text-white shadow-[0_0_20px_rgb(50,50,50)] dark:shadow-white">
      <div>
        <h1 className="flex items-center gap-2">
          <FaHeart /> Prateek Bahad
        </h1>
      </div>
    </section>
  );
};

export default Footer;

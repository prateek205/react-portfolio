import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { EnContext } from "../context/EnquiryContext";

const Contact = () => {
  const { formData, setFormData, handleSubmit } = EnContext();

  return (
    <section className="h-screen w-full flex flex-col gap-10 py-10 px-5 bg-white dark:bg-gray-700 dark:text-black">
      <div className="flex items-center justify-between h-full">
        <div className="w-full h-full flex justify-center flex-col gap-10 py-5 px-10 bg-gray-800 text-white dark:bg-white dark:border-2 dark:border-gray-300 dark:text-black rounded-l-xl">
          <h1 className="text-6xl font-bold text-left">Get In Touch</h1>
          <p className="text-lg">
            {" "}
            Feel free to reach out for collaboration, projects, or job
            opportunities.
          </p>
          <ul className="flex flex-col gap-10 text-xl">
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline />{" "}
              <span className="text-lg">prateekbahad@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <IoMdPhonePortrait />{" "}
              <span className="text-lg">+91-9404557931</span>
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp />{" "}
              <span className="text-lg">Chhatrapati Sambhajinagar</span>
            </li>
          </ul>
          <div className="flex gap-5 text-2xl">
            <Link
              to="https://www.linkedin.com/in/prateek-bahad-a1b985167/"
              target="_blank"
            >
              <FaLinkedinIn className="text-blue-500" />
            </Link>
            <Link to="https://github.com/prateek205" target="_blank">
              <VscGithubInverted />
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 shadow-[0_0_5px_rgb(50,50,50)] rounded-r-xl dark:bg-gray-700 dark:shadow-[0_0_5px_rgb(250,250,250)] dark:shadow-white w-full h-full flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-96 m-auto"
          >
            <h1 className="text-center text-4xl py-5 text-black dark:text-white">
              Enquiry Now
            </h1>
            <input
              className="text-lg py-1 px-2 outline-none bg-transparent shadow-sm shadow-gray-500 rounded-sm dark:text-white"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="text-lg py-1 px-2 outline-none bg-transparent shadow-sm shadow-gray-500 rounded-sm dark:text-white"
              type="email"
              placeholder="Email-Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Type here..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="shadow-sm dark:shadow-gray-500 bg-transparent shadow-gray-500 outline-none py-1 px-2 dark:text-white"
            ></textarea>
            <button className="py-1 px-2 rounded-md bg-white shadow-sm shadow-gray-400 dark:text-black dark:hover:text-white hover:bg-gray-900 hover:translate-y-1 hover:text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

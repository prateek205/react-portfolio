import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { EnContext } from "../context/EnquiryContext";
import { myContext } from "../context/ThemeContext";
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";

const Contact = () => {
  const { formData, setFormData, handleSubmit } = EnContext();
  const { theme, setTheme, handleToggle } = myContext();

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Feel free to reach out for collaborations, projects, or
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">
          {/* Left Side */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 flex flex-col justify-center gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Let's Work Together 🚀
              </h2>

              <p className="text-gray-300 leading-8">
                I'm always interested in discussing new projects, freelance
                opportunities, internships, and innovative ideas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-600">
                  <MdOutlineMailOutline size={22} />
                </div>
                <span>prateekbahad@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-600">
                  <IoMdPhonePortrait size={22} />
                </div>
                <span>+91 9404557931</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-600">
                  <IoLocationSharp size={22} />
                </div>
                <span>Chhatrapati Sambhajinagar, Maharashtra</span>
              </div>
              <button
                onClick={handleToggle}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-all cursor-pointer active:scale-95"
                aria-label="Toggle layout theme"
              >
                {theme ? (
                  <BsSun className="text-yellow-500 text-lg" />
                ) : (
                  <GoMoon className="text-indigo-500 text-lg" />
                )}
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 pt-4">
              <Link
                to="https://www.linkedin.com/in/prateek-bahad-a1b985167/"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-600 hover:scale-110 duration-300"
              >
                <FaLinkedinIn size={22} />
              </Link>

              <Link
                to="https://github.com/prateek205"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-gray-700 hover:scale-110 duration-300"
              >
                <VscGithubInverted size={22} />
              </Link>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white dark:bg-gray-800 p-10">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col gap-6"
            >
              <h2 className="text-3xl font-bold text-center text-black dark:text-white">
                Send Message
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="
                px-4 py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-600
                bg-transparent
                outline-none
                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/30
                dark:text-white"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="
                px-4 py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-600
                bg-transparent
                outline-none
                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/30
                dark:text-white"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="
                px-4 py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-600
                bg-transparent
                outline-none
                resize-none
                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/30
                dark:text-white"
              />

              <button
                type="submit"
                className="
                py-3
                rounded-xl
                bg-red-600
                text-white
                font-semibold
                hover:bg-red-700
                hover:scale-[1.02]
                duration-300
                shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

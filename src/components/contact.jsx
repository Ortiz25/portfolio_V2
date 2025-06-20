import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="dark:bg-darkMode dark:border-b dark:border-slate-400 p-4 "
      >
        <div className="container mx-auto max-w-7xl">
          <div
            className="text-center p-4  font-smooch-sans text-5xl "
            style={{
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Lets Talk
          </div>
          <p className="font-smooch-sans text-center p-4 text-4xl dark:text-white">
            Have a Project Idea? Feel Free to Contact me
          </p>
          <div
              className="w-24 h-1 mx-auto mt-2 mb-8 rounded-full"
              style={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
              }}
            ></div>
          <div className="grid md:grid-cols-2">
            <motion.div
              id="element"
              className="p-5"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
            >
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  rounded p-4 mt-4 shadow-2xl size-11/12 flex flex-col justify-center bg-contactc">
                <div className="m-4 w-fit">
                  <div className=" size-10 p-2 inline m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 lg:size-8 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>

                  <span className="text-black me-2 font-bold text-xl lg:text-2xl">
                    Call:
                  </span>
                  <span className="text-black text-sm lg:text-lg">
                    (+254)726500307
                  </span>
                </div>
                <div className=" m-4 w-fit">
                  <div className="  p-2 inline m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 lg:size-8 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>

                  <span className="text-black me-2 font-bold text-md lg:text-2xl">
                    Email:
                  </span>
                  <span className="text-black text-xs lg:text-lg">
                    samueldeya@gmail.com
                  </span>
                </div>
                <div className="m-4 w-fit">
                  <div className=" size-10 p-2 inline m-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 lg:size-8 inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>

                  <span className="text-black me-2 font-bold text-lg lg:text-2xl">
                    Location:
                  </span>
                  <span className="text-black text-md lg:text-lg">
                    Nairobi,Kenya
                  </span>
                </div>
              </div>
            </motion.div>
            <div>
              <form method="POST" className=" shadow-2xl m-6 p-6 rounded">
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Name:
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      autoComplete="name"
                      className="block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Email address:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      autoComplete="email"
                      className="block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Message:
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows="3"
                      placeholder="Tell me about your project ?"
                      name="message"
                      id="message"
                      required
                      className="block w-9/12 p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      spellCheck="false"
                    ></textarea>
                  </div>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className=" block py-2.5 px-4 me-2 mb-2 mt-6 t-sm font-medium text-white focus:outline-none bg-indigo-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

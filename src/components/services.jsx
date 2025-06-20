import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "@react-spring/web";
import code  from "../assets/images/code.png"
import servers  from "../assets/images/servers.png"
import engineering  from "../assets/images/engineering.png"

function Services() {
  return (
    <div
      id="services"
      className="bg-gray-200 dark:bg-darkMode dark:border-b dark:border-slate-400 p-4"
    >
      <div className="container mx-auto  max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
            >
              <h1 className=" font-smooch-sans text-buttonc text-5xl ">
                My Services:
              </h1>
              <h2 className="font-smooch-sans text-4xl dark:text-white">
                What I provide to my clients
              </h2>
              <p className="md:text-xl dark:text-white">
                I provide custom fullstack website designs to meet the specific
                needs and goals of each client. I ensure the websites/webapps I
                create are optimized for perfomance, scalability and
                accessibility.
                <br />I offer ongoing support and maintenance to ensure that my
                clients' are always up-to-date and functioning at their optimum
                best.I create reponsive designs that work seamlessly across all
                devices and screen sizes
              </p>
              <motion.button
                type="button"
    
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className=" box block py-2 px-5 me-2 mb-2 mt-5 t-sm font-medium text-white focus:outline-none bg-indigo-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </div>
          <div className="p-6 md:p-8">
            <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  bg-white p-2 md:p-4 flex space-x-2  mb-4 rounded">
              <div className="rounded-full bg-gray-200 p-4  md:p-6">
                <img className="size-10" src={code} />
              </div>
              <div className="inline-block max-w-sm ">
                <span className="font-bold text-xl">Website Development</span>
                <p className="text-xs md:text-sm">
                  My website development services provide businesses with
                  custom-built websites that meet their unique needs and goals.
                </p>
              </div>
            </div>
            <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  bg-white p-2 md:p-4 flex space-x-2  mb-4 rounded">
              <div className="rounded-full bg-gray-200 p-4 md:p-6">
                <img
                  className="size-10"
                  src={servers}
                />
              </div>
              <div className="inline-block max-w-sm ">
                <span className="font-bold text-lg md:text-xl">
                  Deployment and Hosting
                </span>
                <p className="text-xs md:text-sm">
                  My proficiency in ubuntu servers guarantees my client quick
                  deployment and maintenance with regards to remote hosting of
                  their web applications.
                </p>
              </div>
            </div>
            <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110 bg-white p-2 md:p-4 flex space-x-2  mb-4 rounded">
              <div className="rounded-full bg-gray-200  p-4 md:p-6 inline">
                <img
                  className="size-10"
                  src={engineering }
                />
              </div>
              <div className="inline-block max-w-sm ">
                <span className="font-bold text-lg md:text-xl">
                  Network services
                </span>
                <p className="text-xs md:text-sm">
                  From my years of experience in the Network Engineering Field,
                  I offer consultation services on how to plan, deploy and
                  maintain the highest level of QoS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

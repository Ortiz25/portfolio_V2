import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "@react-spring/web";
import portfolio from "../assets/images/portfolio1.jpg"
import html5 from "../assets/svg/html5.svg"
import css3 from "../assets/svg/css3.svg"
import js from "../assets/svg/js.svg"
import node from "../assets/svg/node.svg"
import react1 from "../assets/svg/react.svg"

function About() {
  const [animationProps, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateX(100px)",
  }));

  const onIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        set({ opacity: 1, transform: "translateX(0)" });
      } else {
        set({ opacity: 0, transform: "translateX(100px)" });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });
    const target = document.getElementById("animate");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div
      id="about"
      className="p-20 dark:bg-darkMode dark:text-white  dark:border-b dark:border-slate-400"
    >
      <div className="container mx-auto  max-w-7xl grid md:grid-cols-2 ">
        <div className="p-4 transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110 ">
          <div className="flex justify-between p-4">
            <img src={html5} className="size-10 inline" />
            <img src={css3} className="size-10 inline" />
            <img src={js} className="size-10 inline" />
          </div>
          <div className="">
            <img
              className="ring-8 ring-white-800"
              src= {portfolio}
            />
          </div>
          <div className="flex justify-between p-2">
            <img src={node} className="size-14 inline" />
            <img src={react1} className="size-10 inline" />
          </div>
        </div>
        <animated.div id="animate" className="p-4" style={animationProps}>
          <div
            className="text-center p-4 font-smooch-sans text-5xl text-buttonc"
            style={{
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </div>
          <h3 className="text-xl md:text-3xl mb-2">
            I am passionate about creating beautiful and functional websites
            that provide an excellent user experience.
          </h3>
          <p className=" text-md md:text-lg">
            As a specialist in HTML, CSS and Javascript (React and Node js), I
            have a deep understanding of the core building blocks of modern web
            design, with a focus on accessibility and responsive design.I strive
            to deliver websites and web apps that look great and work seamlessly
            across all devices.
          </p>
          <motion.button
            type="button"
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
      
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 inline m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            Download CV
          </motion.button>
        </animated.div>
      </div>
    </div>
  );
}

export default About;

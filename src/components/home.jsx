import React from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "@react-spring/web";
import { Github, Linkedin, ArrowRight, Code, Server, Network } from "lucide-react";
import profilePic from "../assets/images/profile.jpg";

function Home() {
  const props = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(100px)" },
    config: { tension: 50, friction: 5 },
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const skillsData = [
    { icon: Code, text: "Web Developer", color: "from-blue-500 to-cyan-500" },
    { icon: Server, text: "Linux System Admin", color: "from-cyan-500 to-indigo-500"  },
    { icon: Network, text: "Network Engineer", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div
      id="home"
      className="min-h-screen bg-gray-200 dark:bg-darkMode dark:border-b dark:border-slate-400 dark:border-b dark:border-slate-400 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-20">
          
          {/* Content Section */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium"
                variants={itemVariants}
              >
                👋 Hello, My Name is
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
                variants={itemVariants}
              >
                <span className="text-gray-900 dark:text-white font-extrabold">
                  Samuel Deya
                </span>
                <motion.span 
                  className="inline-block ml-2"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut" 
                  }}
                >
                  ✨
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                Crafting digital experiences through code, systems, and networks
              </p>
              
              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {skillsData.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-white text-sm font-medium shadow-lg`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{skill.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Let's Work Together</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Connect with me:
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Ortiz25?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/samuel-deya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <animated.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            style={props}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur opacity-30 animate-pulse"></div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-full">
                <div className="bg-white dark:bg-gray-800 p-2 rounded-full">
                  <img
                    src={profilePic}
                    alt="Samuel Deya"
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 w-8 h-8 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 w-6 h-6 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute top-1/2 -left-8 bg-gradient-to-r from-pink-400 to-purple-500 w-4 h-4 rounded-full shadow-lg"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
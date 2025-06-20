import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.jpeg";
import java from "../assets/images/js.png";
import react from "../assets/svg/react.svg";
import node from "../assets/images/node.png";
import git from "../assets/images/git.png";
import figma from "../assets/images/figma.png";
import press from "../assets/images/wordpress.png";
import ubuntu from "../assets/images/ubuntu.jpg";
import mongo from "../assets/images/mongo.png";
import sql from "../assets/images/sq.png";
import nginx from "../assets/svg/nginx.webp";
import ansible from "../assets/images/ansible.png";
import apache from "../assets/images/apache.jpg";
import mikrotik from "../assets/images/mikro.jpg";
import cambium from "../assets/images/cambium.jpg";
import wifi6 from "../assets/svg/wifi6.webp";
import ubnt from "../assets/images/ubnt.png";
import bootstrap from "../assets/images/bootstrap.jpeg";
import tailwind from "../assets/images/download.png";


function Skills() {
  return (
    <div
      id="skills"
      className="p-10 bg-gray-200 dark:bg-darkMode dark:border-b dark:border-slate-400  "
    >
      <div className="container mx-auto  max-w-7xl">
        <div className="text-center p-4 font-bold  text-5xl font-smooch-sans"  style={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
          Skills
        </div>
        <div className="text-center p-2 font-smooch-sans text-4xl dark:text-white">
          Some of My Working Tools
          <div
              className="w-24 h-1 mx-auto mt-2 mb-8 rounded-full"
              style={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
              }}
            ></div>
        </div>
        
        <div className="grid md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-3xl font-smooch-sans dark:text-white">
              Web Development
            </h3>
            <div className="flex flew-row flex-wrap p-4 justify-center">
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg ">
                <img className="size-16 " src={html} />
                <h3 className="font-smooch-sans text-2xl ">html</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16 " src={css} />
                <h3 className="font-smooch-sans text-2xl">css</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16 " src={java} />
                <h3 className="font-smooch-sans text-2xl">Javascript</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={react} />
                <h3 className="font-smooch-sans text-2xl">React</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={node} />
                <h3 className="font-smooch-sans text-2xl">Nodejs</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={git} />
                <h3 className="font-smooch-sans text-2xl">Git-hub</h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-smooch-sans dark:text-white">
              UI/UX Design & Frameworks
            </h3>
            <div className="flex flew-row flex-wrap p-4 justify-center">
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={figma} />
                <h3 className="font-smooch-sans text-2xl">Figma</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={tailwind} />
                <h3 className="font-smooch-sans text-2xl">Tailwind</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={bootstrap} />
                <h3 className="font-smooch-sans text-2xl">Bootstrap</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={press} />
                <h3 className="font-smooch-sans text-2xl">wordpress</h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-smooch-sans dark:text-white">
              Databases & Serves
            </h3>
            <div className="flex flew-row flex-wrap p-4 justify-center">
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={ubuntu} />
                <h3 className="font-smooch-sans text-2xl">Ubuntu</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg ">
                <img className="size-16" src={sql} />
                <h3 className="font-smooch-sans text-2xl">Mysql</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={ansible} />
                <h3 className="font-smooch-sans text-2xl">Ansible</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={apache} />
                <h3 className="font-smooch-sans text-2xl">Apache</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={mongo} />
                <h3 className="font-smooch-sans text-2xl">Mongodb</h3>
              </div>
              <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
                <img className="size-16" src={nginx} />
                <h3 className="font-smooch-sans text-2xl">Nginx</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2 font-smooch-sans text-4xl dark:text-white">
          Hardware
        </div>
        <div className="flex flew-row flex-wrap p-4 justify-center">
          <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
            <img className="size-20" src={ubnt} />
          </div>
          <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
            <img className="size-20" src={mikrotik} />
          </div>
          <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
            <img className="size-20" src={wifi6} />
          </div>
          <div className="transition ease-in-outdelay-100 duration-700 hover:-translate-x-1 hover:scale-110  m-2 bg-white p-4 shadow-2xl rounded-lg">
            <img className="size-20" src={cambium} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

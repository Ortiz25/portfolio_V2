import React from "react";
import { motion } from "framer-motion";
import WorkModal, { workInfo } from "../files/workinfo.jsx";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Globe,
  Code,
  Server,
  Database,
} from "lucide-react";
import { useState } from "react";

function Work() {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  function handleClick(e) {
    setModal(!modal);
    const parent = e.target.closest(".parent");
    const parentKey = parseInt(parent.dataset.customKey);
    setModalInfo(parentKey);
  }

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-darkMode dark:border-b dark:border-slate-400 p-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1
              className="text-6xl font-bold mb-4 font-smooch-sans"
              style={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work
            </h1>
            <h2 className="text-4xl text-gray-700 dark:text-white font-smooch-sans">
              Recent Projects
            </h2>
            <div
              className="w-24 h-1 mx-auto mt-6 rounded-full"
              style={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
              }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workInfo.map((work) => (
              <div
                key={work.key}
                className="parent group"
                data-custom-key={work.key}
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/50 hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-300 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={work.titlePic}
                      alt={work.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={handleClick}
                        className="p-4 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
                      >
                        <ExternalLink className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {work.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {work.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={work.modalInfo.tableInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 text-center"
                      >
                        Visit Site
                      </a>
                      <button
                        onClick={handleClick}
                        className="flex-1 px-4 py-2 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 rounded-lg transition-all duration-200 hover:scale-105"
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <WorkModal
        isOpen={modal}
        onClose={() => setModal(false)}
        modalInfo={modalInfo}
      />
    </>
  );
}

export default Work;

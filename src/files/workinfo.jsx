import React, { useState } from "react";
import hrm1 from "../assets/hrm1.png";
import hrm2 from "../assets/hrm2.png";
import hrm3 from "../assets/hrm3.png";
import hrm4 from "../assets/hrm4.png";
import rental1 from "../assets/rental1.png";
import rental2 from "../assets/rental2.png";
import rental3 from "../assets/rental3.png";
import rental5 from "../assets/rental5.png";
import rental6 from "../assets/rental6.png";
import portal1 from "../assets/portal1.png";
import portal2 from "../assets/portal2.png";
import portal3 from "../assets/portal3.png";
import portal4 from "../assets/portal4.png";
import portal5 from "../assets/portal5.png";
import portal6 from "../assets/portal6.png";


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

// Mock data based on your workinfo structure
export const workInfo = [
  {
    title: "Hotspot App",
    description: "Fullstack app",
    titlePic: portal1,
    key: 1,
    tags: ["fullstack", "captivePortal", "responsive"],
    modalInfo: {
      title: "Hotspot Web-App Design",
      description:
        "Built with a React.js frontend and a Nodejs backend. Integrable with a Mikrotik router and Freeradius server to provide Authentication, Authorization and Accounting to hotspot Clients. Once integrated with a Mikrotik Router hotspot clients earn bundles by watching short advertisements and use the earned bundles to go online",
      tableInfo: {
        type: "Web-app",
        stack: "MERN (React, Node, Express, MongoDB)",
        radius: "Freeradius & MYSQL",
        Hosting: "Digital Ocean (Ubuntu VPC)",
        Visit: "Livecrib",
        url: "https://livecrib.rent/",
      },
      pics: [portal2, portal3, portal4, portal5, portal6],
      modalKey: 3,
    },
  },
  {
    title: "FLOWHR",
    description: "Fullstack HR Web application",
    titlePic: hrm1,
    key: 1,
    tags: ["fullstack", "webapp", "responsive"],
    modalInfo: {
      title: "HRMS Web-App ",
      description:
        "Built with a React.js frontend and a Nodejs backend with a postgreSQL as the DBMS.The webapp is fully responsive and usable with all screen sizes",
      tableInfo: {
        type: "Web-app",
        stack: "MERN (React, Node, Express, PostgreSQL)",
        Credentials: "user:samueldeya@outlook.com \n pass:m0t0m0t0",
        Hosting: "Digital Ocean (Ubuntu VPC)",
        Visit: "FlowHR",
        url: "https://hrmdemo.teqova.biz/",
      },
      pics: [hrm2, hrm3, hrm4],
      modalKey: 1,
    },
  },
  {
    title: "RMS",
    description: "Fullstack Rental Management System",
    titlePic: rental1,
    key: 2,
    tags: ["fullstack", "webapp", "responsive"],
    modalInfo: {
      title: "Rental Mnager",
      description:
        "Built with a React.js frontend and a Nodejs backend with a postgreSQL as the DBMS, the app can be used to manage all kinds of property",
      tableInfo: {
        type: " A Property Management Web application",
        stack: "Reactjs, Nodejs, Expressjs, PostgreSQL",
        Hosting: "Digital Ocean (Ubuntu VPC)",
        Visit: "Rental Manager",
        url: "https://rentaldemo.teqova.biz/",
      },
      pics: [rental2, rental3, rental5, rental6],
      modalKey: 2,
    },
  },

];

function WorkModal({ isOpen, onClose, modalInfo }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !modalInfo) return null;

  const currentWork = workInfo.find((work) => work.key === modalInfo);
  if (!currentWork) return null;

  const { modalInfo: info } = currentWork;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % info.pics.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + info.pics.length) % info.pics.length
    );
  };

  const getIcon = (key) => {
    const icons = {
      type: Globe,
      stack: Code,
      Hosting: Server,
      radius: Database,
    };
    return icons[key] || Globe;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl h-[95vh] sm:max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
        </button>

        <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
          {/* Image Gallery Section */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center h-64 sm:h-80 lg:h-full">
            <div className="relative w-full h-full">
              <img
                src={info.pics[currentImageIndex]}
                alt={`${info.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                style={{ minHeight: "300px" }} // This will ensure the images are atleast 300px high
              />

              {/* Image Navigation */}
              {info.pics.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 text-white hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 text-white hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                {currentImageIndex + 1} / {info.pics.length}
              </div>

              {/* Image Dots */}
              <div className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {info.pics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {info.description}
                </p>
              </div>

              {/* Technical Details */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Technical Details
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(info.tableInfo).map(([key, value]) => {
                    if (key === "url" || key === "Visit") return null;
                    const IconComponent = getIcon(key);
                    return (
                      <div
                        key={key}
                        className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                          <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <dt className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {key}
                          </dt>
                          <dd className="text-gray-900 dark:text-white font-medium mt-1 text-sm sm:text-base break-words">
                            {value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {currentWork.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 sm:p-6 lg:p-8 pt-0">
              <a
                href={info.tableInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl group text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Visit {info.tableInfo.Visit}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkModal;

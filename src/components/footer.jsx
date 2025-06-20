import React, { useState } from "react";

export default function Footer({
  darkMode,
  toggleDarkMode,
  toggleActive,
  nav,
  classNames,
}) {
  return (
    <div className="bg-gray-200 dark:bg-darkMode dark:text-white p-4 h-60">
      <div className="flex justify-center p-4">
        <h1 className="font-smooch-sans text-5xl">Samuel Deya</h1>
      </div>

      <div className="flex space-x-2 md:space-x-3 justify-center p-4">
        {nav.map((item) => (
          <a
            key={item.name}
            onClick={toggleActive}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-800 dark:text-white hover:bg-gray-700 hover:text-white",
              "rounded-md px-1 md:px-3 py-2 text-md font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <hr className="m-2" />
      <div className="text-center p-4">
        {" "}
        © copyright 2024. All Rights Reserved
      </div>
    </div>
  );
}

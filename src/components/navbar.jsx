import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  SunIcon,
  MoonIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Nav({
  darkMode,
  toggleDarkMode,
  toggleActive,
  nav,
  classNames,
}) {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-200 dark:bg-darkMode sticky top-0 shadow-lg dark:shadow-shadowc dark:shadow-md h-24 p-4 z-50"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 dark:text-white hover:text-buttonc text-5xl items-center font-smooch-sans sm:text-3xl lg:text-4xl">
              Samuel Deya
            </div>
            <div className="hidden  sm:mx-auto sm:block">
              <div className="flex space-x-2 md:space-x-2 ">
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
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="relative rounded-full bg-white p-1 text-gray-500 hover:text-gray-900 "
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              {!darkMode ? (
                <SunIcon aria-hidden="true" className="h-6 w-6" />
              ) : (
                <MoonIcon aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 dark:bg-darkMode bg-gray-200 z-80">
          {nav.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-800 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium dark:text-white"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

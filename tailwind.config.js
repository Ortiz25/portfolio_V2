/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkMode: "#1e293b",
      shadowc: "#f5f5f4",
      buttonc: "#4E31AA",
      contactc: "#e0f4ff",
      bg1: "#eef5ff",
      backdrop: "rgba(0, 0, 0, 0.55)",
      back: "rgba(0, 0, 0, 0.75)",
    },
    extend: {
      fontFamily: {
        "smooch-sans": ["Smooch Sans", "sans-serif"],
      },
      keyframes: {
        "slide-down": {
          from: { opacity: 0, transform: "translateY(-15%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-down": "slide-down 1s ease-out forwards",
      },
    },
  },
  plugins: [],
  
};

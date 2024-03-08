/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#1976d2",
          dark: "#115293",
        },
        secondary: {
          main: "#ffc107",
          dark: "#ffc107",
        },
        tertiary: {
          main: "#9c27b0",
          dark: "#9c27b0",
        },
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)", ...fontFamily.serif],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "2rem",
      },
      colors: {
        "grey-color": "#6B7280",
        "stroke-grey": "#EDEDED",
        "light-blue": "#F3F9FB",
        "blue-color": "#008ECC",
        "black-color": "#222222",
        "top-nav-color": "#F5F5F5",
        "divider-color": "#D9D9D9",
        "red-color": "#EB001B",
      },
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

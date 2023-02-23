/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '3xl': '2rem',
      },
      colors: {
        "grey-color": "#6B7280",
        "stroke-grey": "#EDEDED",
        "light-blue": "#F3F9FB",
        "blue-color": "#008ECC",
        "black-color": "#222222",
      },
      fontFamily: {
        sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

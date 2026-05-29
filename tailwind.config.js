// Install Tailwind CSS by running the initialization command:
// npx tailwindcss init

const tailwindcss = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // Include all files in the `app` directory
    './pages/**/*.{js,ts,jsx,tsx}',     // Include if you have a `pages` directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the `components` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

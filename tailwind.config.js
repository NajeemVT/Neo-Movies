/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#03203C",
        "brand-black": "#242B2E",
        "brand-white": "#FFFAFA",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

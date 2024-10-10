/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18abc6",
        secondary: "#a3a3a3",
        tertiary: "#f8f8f8",
      },
    },
  },
  plugins: [],
};

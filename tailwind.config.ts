/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        isa: {
          "dark-red": "#540317",
          "light-red": "#7D454D",
          "bright-yellow": "#F6DE50",
          "dark-yellow": "#BF9B36",
        },
      },
    },
  },
  plugins: [],
};

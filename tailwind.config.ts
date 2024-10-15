/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      colors: {
        isa: {
          "dark-red": "#540317",
          "light-red": "#7D454D",
          "bright-yellow": "#F6DE50",
          "dark-yellow": "#BF9B36",
          "beige-100": "#f5e7d5",
        },
      },
    },
  },
  plugins: [],
};

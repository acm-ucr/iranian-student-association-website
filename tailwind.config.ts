/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      animation: {
        "fade-down": "fadeDown 0.5s ease-out forwards",
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        isa: {
          "dark-red": "#540317",
          "light-red": "#7D454D",
          "bright-yellow": "#F6DE50",
          "dark-yellow": "#BF9B36",
          "beige-100": "#f5e7d5",
          "light-gray": "#D9D9D9",
          "light-beige": "#F0D9B9",
          "events-beige": "#FFEFD7",
        },
      },
    },
  },
  plugins: [],
};

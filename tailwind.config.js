/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          brown: "#765341",
          b: "#b5651d",
          c: "#FFE4B5",
          d: "#FFFACD",
          background: "#FAFAD2",
          backgroundC: "#f7f3d7",
          green: "rgb(22,163,74)",
        },
        chat: {
          green: "#74a14e",
          greenH: "rgb(21,128,61)" /* green-700 */,
          brown: "#4c3a2c",
          background1: "#f7f7f7",
          background2: "#f0f8e0",
        },
      },

      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

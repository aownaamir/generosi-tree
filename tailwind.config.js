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
          green: "rgb(22,163,74)",
        },
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

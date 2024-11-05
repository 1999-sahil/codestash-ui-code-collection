/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu Condensed", "serif"],
        raleway: ["Raleway", "serif"],
        poppins: ["Poppins", "serif"],
        openSans: ["Open Sans", "serif"],
        mukta: ["Mukta", "serif"],
        kanit: ["Kanit", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
}
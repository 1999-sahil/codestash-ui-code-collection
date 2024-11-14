/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,json}",
    "./components/**/*.{html,js,ts,jsx,tsx,json}",
    "./public/**/*.{html,js,ts,jsx,tsx,json}",
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
  plugins: [
    require("@tailwindcss/typography")
  ],
}

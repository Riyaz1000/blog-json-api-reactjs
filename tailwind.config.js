/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        poppines: ["Poppins", "sans-serif"],
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};

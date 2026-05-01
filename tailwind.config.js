/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ef",
        clay: "#d4bfa3",
        beige: "#e8dfd2",
        sage: "#c4c9b8",
        terracotta: "#c96f52",
        gold: "#bfa75a",
        charcoal: "#2f2a26"
      }
    }
  },
  plugins: []
};

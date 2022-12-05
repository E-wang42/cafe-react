/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-pattern.jpg')",
      },
      colors: {
        "light-coffee": "#be4632",
        "medium-coffee": "#6d2f2c",
        "dark-coffee": "#1f1919",
        "light-grey": "#e6e6e6",
        "dark-grey": "#625d5d",
        "pastel-coffee": "#d0a48d",
      },
      fontFamily: {
        cormorant: [`"Cormorant Upright"`, "serif"],
        fira: [`"Fira Sans"`, "serif"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-coffee": "#be4632",
      "medium-coffee": "#6d2f2c",
      "dark-coffee": "#1f1919",
      "light-grey": "#e6e6e6",
      "dark-grey": "#625d5d",
    },
    extend: {
      fontFamily: {
        cormorant: [`"Cormorant Upright"`, "serif"],
        fira: [`"Fira Sans"`, "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Nunito Sans"],
    },
    extend: {
      colors: {
        "primary": "#17392d",
        "secondary": "#68A61C"
      },
      gridTemplateColumns: {
        'cards': 'repeat(auto-fill, 250px)'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '200px', 'max': '749px'},   // 320px up to 749px
        'md': {'min': '750px', 'max': '999px'},   // 750px up to 999px
        'lg': '1000px',                           // 1000px and above
      },
      colors: {
        customGray: "#9B9B9B", // Custom color
      },
    },
  },
  plugins: [],
}
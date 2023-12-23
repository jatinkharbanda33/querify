/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",'./public/index.html'],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px #FBBF24, 0 0 15px #FBBF24'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
    
  },
  plugins: [
  require('tailwind-scrollbar')
],
}


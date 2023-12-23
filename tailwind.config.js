/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",'./public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px #FBBF24, 0 0 15px #FBBF24'
      }
    },
    
  },
  plugins: [require("daisyui"),
  require('tailwind-scrollbar')
],
  daisyui: {
    themes: ["light", "dark"],
  },
}


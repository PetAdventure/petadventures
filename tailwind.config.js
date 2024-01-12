/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    './**.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background': '#f7fcfd',
        'modal': '#f4f4f4'
      },
      colors: {
        'text': '#020708',
        'background': '#f7fcfd',
        'primary': '#007da3',
        'secondary': '#8bcde1',
        'accent': '#ff8c00',
        'link': '#594df7', 
        'modal': '#f4f4f4'
       },
       fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        Playfair: ['Playfair, sans-serif']
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      }
       
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "orange": "#FD4A36",
        "grey": "#ACACAC",
        "lightgrey": "#A5A6AA",
        "black": "#292B2C",
        "darkblack": "#000000"
      },
      boxShadow: {
        '3xl': '0px 0px 50px #809EF94D',
        '4xl': '0px 4px 6px 0px #0000001A',
        '5xl': '0px 4px 16px 0px #0000000D',
        '6xl': '0px 7px 25px 0px #495BED33'
      },
      container: {
        screens: {
          "2xl": "1180px"
        }
      },

      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'xmd': { 'max': '979px' },
        // => @media (max-width: 979px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00777B'      },
      backgroundImage: {
        
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-path-auth': {
          clipPath: 'polygon(34% 0, 100% 0, 100% 100%, 0% 100%)',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    }
  ],
};

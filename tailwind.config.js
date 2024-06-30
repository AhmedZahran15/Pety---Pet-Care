/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
        Fredoka: ["Fredoka", "cursive"],
      },
      colors: {
        primary: "#0866FF",
        primaryLight: "#3b86ff",
        primaryDark: "#0051d4",
        secondary: "#CEE1FF",
        yellowDark: "#FFCC00",
      },
      height: {
        screen: "100dvh",
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(0.645,0.045,0.355,1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "680px",
      // => @media (min-width: 768px) { ... }

      lg: "880px",
      // => @media (min-width: 1024px) { ... }

      xl: "1370px",
      // => @media (min-width: 1280px) { ... }

      // "2xl": "1745px",
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        avifan: ["avifan"],
        kailisix_regular: ["kailsix-regular"],
        kailisix_italic: ["kailsix-italic"],
      },

      keyframes: {
        mousebc: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(2.5px)",
          },
        },
      },

      animation: {
        mosueBounce: "mousebc 1s infinite",
      },
    },
  },
  plugins: [],
};

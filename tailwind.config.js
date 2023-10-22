/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        "contact-us-bg": "url('../img/Project-Img/bg-Contactus.png')",
      },

      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
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
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "Black-storke": "#3D3C3C",
        "Black-Nav": "#121212",
        "blue-saber": "#00A4E9",
      },

      screens: {
        xl: "1200px",
        "2xl": "1320px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};

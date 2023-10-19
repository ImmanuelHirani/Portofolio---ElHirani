/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },


    extend: {

      backgroundImage: {
        "contact-us-bg":
          "url('/img/Project-Img/bg-Contactus.png')",

      },

      keyframes: {
        mousebc: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(2.5px)',
          },
        },
      },

      animation: {
        mosueBounce: 'mousebc 1s infinite',
      },

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },

      colors: {
        'Green-saber'  : '#11AF47',
        'Black-storke' : '#3D3C3C',
        'Black-Nav'    : '#121212'
      },

      screens: {
        "xl" : "1200px",
        "2xl": "1320px",
        "3xl": '1600px',
      },
    

    },
  },
  plugins: [],
}
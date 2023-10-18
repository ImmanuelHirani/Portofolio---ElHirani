/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    container: {
      center: true,
    },


    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'Green-saber'  : '#11AF47',
        'Black-storke' : '#3D3C3C'
      },

      screens: {
        "2xl": "1320px",
        "3xl": '1600px',
      },
    

    },
  },
  plugins: [],
}
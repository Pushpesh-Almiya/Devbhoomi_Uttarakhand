/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {},
      fontFamily :{
        signature:['Caveat', "cursive"]
      },
      backgroundImage: {
        'hero': "url('./images/Photos/About.jpeg')"
      }
    },
  plugins: [],
}


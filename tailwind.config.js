/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        orangeColor: '#FD5D14', 
        blueColor: '#02245B', 
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')

  ],
};

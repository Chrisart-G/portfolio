/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"  // Add Flowbite's content path
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#f8f8f8', // Custom white
        customOrange: '#FF4500', // Custom bright orange
      },
    },
  },
  plugins: [
    require('flowbite/plugin')  // Add Flowbite plugin
  ],
}

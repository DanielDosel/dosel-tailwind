/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'loos-wide': ['loos-wide', 'sans-serif'],
        'sofia-pro': ['sofia-pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
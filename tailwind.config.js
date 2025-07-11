/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        italianno: ['"Italianno"', 'cursive'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

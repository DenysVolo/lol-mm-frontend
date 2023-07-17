/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'cus-light-grey': '#bac7e5',
      'cus-med-grey' : '#7b7e74',
      'cus-dark-grey': '#282b31',
      'cus-yellow' : '#f2a51e',
      'cus-gold' : '#e39025',
      'cus-brown' : '#8d7051'
    },
    extend: {},
  },
  plugins: [],
}

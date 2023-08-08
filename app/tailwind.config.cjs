/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            bebas: 'Bebas Neue'
        },
        colors: {
            'cus-white' : '#F4F4F9',
            'cus-light-grey': '#434852',
            'cus-light-grey-hover': '#525864',
            'cus-med-grey' : '#353941',
            'cus-med-grey-hover' : '#646a78',
            'cus-dark-grey': '#1a1b1d',
            'cus-gold' : '#e39025',
            'cus-light-blue' : '#B8DBD9'
        },
        extend: {},
    },
    plugins: [],
}
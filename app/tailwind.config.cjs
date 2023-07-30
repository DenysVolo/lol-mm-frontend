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
            'cus-light-grey': '#434852',
            'cus-light-grey-hover': '#525864',
            'cus-med-grey' : '#353941',
            'cus-med-grey-hover' : '#646a78',
            'cus-dark-grey': '#1a1b1d',
            'cus-yellow' : '#f2a51e',
            'cus-gold' : '#e39025',
            'cus-brown' : '#8d7051'
        },
        extend: {},
    },
    plugins: [],
}
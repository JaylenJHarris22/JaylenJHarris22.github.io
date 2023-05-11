/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray' : '#121212',
      },
    },
  },
  plugins: [],
}


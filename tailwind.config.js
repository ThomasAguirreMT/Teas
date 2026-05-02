/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      colors: {
        teas: {
          teal: '#00ae9d',
          navy: '#2d4258',
          dark: '#0d1b2a',
        }
      }
    },
  },
  plugins: [],
};

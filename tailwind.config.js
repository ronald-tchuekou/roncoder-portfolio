/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#115571',
        'primary-dark': '#14212D',
        'primary-light': '#31AFB4',
        'accent': '#ED8074'
      }
    },
  },
  plugins: [],
}
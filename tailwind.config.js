/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#282C33',
        'primary': '#00FFEE',
      }
    },
  },
  plugins: [],
}
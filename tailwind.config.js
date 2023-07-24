/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        handjet: ['"Handjet"', 'cursive'],
        karla: ['"Karla"', 'sans-serif']
      }
    }
  },
  plugins: []
}

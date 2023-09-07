/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        source: ['"Source Code Pro"', 'monospace'],
        montserrat: ['"Montserrat"', 'sans-serif']
      }
    }
  },
  plugins: []
}

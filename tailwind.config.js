
/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/Pages/**/*.{js,ts,jsx,tsx}',
    './src/Layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderColor: {
        'NGML-SEC': 'var(--NGML-SEC, #005828)'
      },
      colors: {
        primary: colors.blue
      }
    },
  },
  plugins: [],
}


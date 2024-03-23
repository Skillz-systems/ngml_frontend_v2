/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
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
        'NGML-SEC': 'var(--NGML-SEC, #005828)',
      },
      colors: {
        primary: colors.blue,

        nnpc: {
          50: '#f2fbf6',
          100: '#e1f7ea',
          200: '#c4eed8',
          300: '#95e0b8',
          400: '#60c892',
          500: '#3aad71',
          600: '#2b8e5a',
          700: '#226844',
          800: '#22593d',
          900: '#1d4a34',
          950: '#0b281a',
        },
      },
      backgroundColor: {
        customYellow: '#FDF6E4',
        customGreen: '#AEF359',
        customWhite: '#FDFFF5',
      },
    },
  },
  plugins: [],
};

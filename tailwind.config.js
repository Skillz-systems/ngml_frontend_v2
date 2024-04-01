/** @type {import('tailwindcss').Config} */
// import colors from 'tailwindcss/colors';
import colors from './src/Utils/colors'
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
        primary: colors.medium,
        nnpc: colors.nnpc,
        gray: colors.gray,
        medium: colors.medium,
        dark: colors.dark,
        light: colors.light,
        red: colors.red,
        yellow: colors.yellow,
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

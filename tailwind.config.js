/** @type {import('tailwindcss').Config} */
// import colors from 'tailwindcss/colors';
import colors from './src/Utils/colors';
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
    './src/Pages/**/*.{js,ts,jsx,tsx}',
    './src/Layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      borderColor: {
        'NGML-SEC': 'var(--NGML-SEC, #005828)'
      },
      colors: {
        primary: colors.nnpcmediumgreen,
        nnpc: colors.nnpc,
        nnpcdark: colors.dark,
        nnpcmediumgreen: colors.nnpcmediumgreen,
        nnpcdarkgreen: colors.nnpcdarkgreen,
        nnpclightgreen: colors.nnpclightgreen,
        nnpcred: colors.nnpcred,
        nnpcyellow: colors.nnpcyellow
      },
      backgroundColor: {
        customYellow: '#FDF6E4',
        customGreen: '#AEF359',
        customWhite: '#FDFFF5'
      },

       fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    }
  },
  plugins: []
};

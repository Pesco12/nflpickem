/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#99DC00',
        dark: '#040B0E',
        dark01: '#121417',
        grayBorder: '#3B4754',
        gray01: '#9CABBA',
        inputBg: '#142830',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

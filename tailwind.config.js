/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'indian-red': '#CD5C5C',
        'turmeric': '#FFC844',
        'deep-saffron': '#FF9933',
        'ivory-white': '#FFFFF0',
      },
    },
  },
  plugins: [],
};
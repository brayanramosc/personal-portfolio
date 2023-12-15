/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'primary': {
        light: '#121212',
        dark: '#ffffff'
      },
      'dark-primary' : {
        100: '#382bf0',
        200: '#5e43f3',
        300: '#7a5af5',
        400: '#9171f8',
        500: '#a688fa',
        600: '#ba9ffb',
      },
      'dark-secondary' : {
        100: '#121212',
        200: '#282828',
        300: '#3f3f3f',
        400: '#575757',
        500: '#717171',
        600: '#8b8b8b',
      },
      'dark-mixed' : {
        100: '#1a1625',
        200: '#2f2b3a',
        300: '#46424f',
        400: '#5e5a66',
        500: '#76737e',
        600: '#908d96',
      },
    },
    extend: {},
  },
  plugins: [],
}

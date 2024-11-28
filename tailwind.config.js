/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#111111',
        },
        secondary: {
          light: '#EEEEEE',
          dark: '#333333',
        },
        text: {
          light: '#222222',
          dark: '#DDDDDD',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        secondary: {
          light: '#f3f4f6',
          dark: '#374151',
        },
        text: {
          light: '#111827',
          dark: '#f9fafb',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}


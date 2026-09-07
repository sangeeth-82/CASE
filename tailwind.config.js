/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clinical: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        ayush: {
          50: '#f4fbf7',
          100: '#e2f7ea',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // azul oscuro
          light: '#3b82f6',
          dark: '#1e293b',
        },
        secondary: {
          DEFAULT: '#facc15', // amarillo
          light: '#fef08a',
          dark: '#eab308',
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        serif:   ['Source Serif 4', 'Georgia', 'serif'],
        sans:    ['Libre Franklin', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        'wsj-red': '#8B0000',
        'wsj-red-light': '#a00000',
        'ink':     '#1a1a1a',
        'ink-muted': '#555555',
        'border':  '#d0ccc4',
      },
    },
  },
  plugins: [],
}
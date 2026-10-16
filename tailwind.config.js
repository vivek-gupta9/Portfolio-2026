/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlue: '#60A5FA', 
        cardYellow: '#FDE047',
        cardPink: '#F9A8D4',
        cardGreen: '#86EFAC',
        cardPurple: '#C084FC',
        cardRed: '#FCA5A5',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
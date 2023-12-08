/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:'#98C347',
      secondary:'#5B9B3E',
      tertiary:'#155E1E',
      red: '#e3342f',
      yellow: '#ffed4a',
      green: '#38c172',
      blue: '#3490dc',
      indigo: '#6574cd',
      purple: '#9561e2',
      pink: '#f66d9b',
      white:'#ffffff'
    },
    fontFamily:{
      Ubuntu:'Ubuntu'
    },
    extend: {},
  },
  plugins: [],
}
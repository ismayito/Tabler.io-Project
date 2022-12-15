/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      visibility: ["group-hover"],
    },
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg': '1200px',
      'xl':'1280px',
      '2xl':'1536px',
    }
  },
  plugins: [],
}

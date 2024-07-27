/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: 'rgb(84, 96, 249)',
        customBlue2: 'rgb(54, 130, 221)',
        customCyan: 'rgb(0, 212, 255)',
      },
    },
  },
  plugins: [],
}
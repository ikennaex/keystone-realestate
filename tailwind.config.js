/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        customBlue: "#033363",
        customOrange: "#bda062",
        
      }
    },
  },
  plugins: [],
}
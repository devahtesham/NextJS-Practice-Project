/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}",
    "./pages/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        devonshire:["var(--font-devonshire)","serif"],
        orbitron:["var(--font-orbitron)","serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


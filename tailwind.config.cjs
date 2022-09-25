/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(172, 67%, 45%)',
        },
        secondary: {
          900: 'hsl(183, 100%, 15%)',
          700: 'hsl(186, 14%, 43%)',
          500: 'hsl(184, 14%, 56%)',
          300: 'hsl(185, 41%, 84%)',
          100: 'hsl(189, 41%, 97%)',
        },
      },
      fontFamily: {
        body: 'Space Mono',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
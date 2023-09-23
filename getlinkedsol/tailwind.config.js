/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        backgroundImage: {
          'privacy': "url('./assets/privacylock.png')",
          
         }
      },
      colors: {
     
        'dark': '#150E28',
        'card-dark':'#1C162F',
        'purple':'#903AFF',
        'pink': '#D434FE',
        'white': '#ffffff',
        'border': '#ffffff2e',
        'footer': '#100B20',
        'pink-j': '#FF26B9'
        }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F5F2EC',
          beige: '#E8E1D7',
          charcoal: '#181818',
          brown: '#29241F',
          gold: '#1468a2',
          'gold-light': '#1468a2',
          card: '#FAF8F5',
          border: '#E2DACD',
          'border-dark': '#38322B'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif']
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em'
      }
    },
  },
  plugins: [],
}

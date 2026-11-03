/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#070809', dark: '#0e1013', card: '#131519',
          lightBlue: '#cadbe8', lightBlueDark: '#b2c8d8', muted: '#7e8492',
          border: '#1f2229', borderLight: '#2c303a'
        }
      },
      fontFamily: { display: ['Syne', 'sans-serif'], body: ['"Plus Jakarta Sans"', 'sans-serif'] },
      animation: { marquee: 'marquee 28s linear infinite', 'spin-slow': 'spin 18s linear infinite' },
      keyframes: { marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } } }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
}

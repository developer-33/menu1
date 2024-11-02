/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        brass: '#b08d57', 
        green: '#39ff14',
        // Custom brass color for steampunk style
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      
      },
    },
  },
};
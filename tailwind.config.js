/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0b12',
          secondary: '#111219',
          card: '#13141f',
          elevated: '#1a1b2e',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          muted: 'rgba(255,255,255,0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

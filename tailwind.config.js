/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#0D0804',
        'charcoal-2': '#1A100A',
        terracotta: '#C4521E',
        'terracotta-dk': '#8B3514',
        'terracotta-lt': '#E08555',
        gold: '#D4A843',
        'gold-dk': '#9C7820',
        parchment: '#F5EDD8',
        'parchment-dk': '#E8DAB8',
        bone: '#FAF4E6',
        ink: '#1F1410',
        clay: '#D4956A',
        sage: '#7A8C6E',
        jade: '#5E8A6A',
        rust: '#9C3B1E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        head: ['Cinzel', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        deva: ['"Noto Serif Devanagari"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'spin-rev': 'spin 14s linear infinite reverse',
        'float-pot': 'floatPot 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        floatPot: {
          '0%, 100%': { transform: 'translate(-50%, -52%)' },
          '50%': { transform: 'translate(-50%, -48%)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        'widest-xl': '0.32em',
      },
    },
  },
  plugins: [],
}

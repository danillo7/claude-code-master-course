/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f3',
          100: '#fce7e4',
          200: '#fad3ce',
          300: '#f5b4ab',
          400: '#ed8779',
          500: '#e15d4e',
          600: '#cc4030',
          700: '#ab3326',
          800: '#8d2e24',
          900: '#762c24',
          950: '#40130e',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c3c6cd',
          300: '#9ea2ac',
          400: '#797e8b',
          500: '#5e6370',
          600: '#4a4e59',
          700: '#3d404a',
          800: '#35373f',
          900: '#1a1b1f',
          950: '#0d0e10',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'progress': 'progress 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(225, 93, 78, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(225, 93, 78, 0.8)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
    },
  },
  plugins: [],
}

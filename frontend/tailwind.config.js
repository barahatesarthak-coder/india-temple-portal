/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706', // Primary Sacred Gold/Amber
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        saffron: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c', // Sacred Saffron
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        maroon: {
          50: '#fdf2f4',
          100: '#fce7ea',
          500: '#be123c',
          600: '#9f1239',
          700: '#881337', // Deep Temple Crimson
          800: '#4c0519',
          900: '#2c000e',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'divine': '0 10px 30px -10px rgba(217, 119, 6, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'divine-lg': '0 20px 40px -15px rgba(217, 119, 6, 0.25), 0 8px 12px -4px rgba(0, 0, 0, 0.08)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(254, 243, 199, 0.6)',
      },
      backgroundImage: {
        'mandala-subtle': "radial-gradient(circle at center, rgba(217, 119, 6, 0.05) 0%, transparent 70%)",
      }
    },
  },
  plugins: [],
}

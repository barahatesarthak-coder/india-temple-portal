/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sandstone: {
          50: '#FDFBF7',
          100: '#FAF4EB',
          200: '#F5EBE1',
          300: '#EFE3D3',
          400: '#E2D1BD',
          500: '#CDB9A1',
          600: '#B49E85',
          700: '#8E7760',
          800: '#5C4A3A',
          900: '#2D241E',
        },
        terracotta: {
          50: '#FDF4F2',
          100: '#FBE6E2',
          200: '#F5CDC6',
          300: '#EAA69A',
          400: '#DC7663',
          500: '#C05621',
          600: '#A43E1B',
          700: '#7A2E1E',
          800: '#5A1F13',
          900: '#3D130B',
        },
        brass: {
          50: '#FBF8EE',
          100: '#F7EED2',
          200: '#EFDCA5',
          300: '#E5C672',
          400: '#DBB144',
          500: '#D4AF37', // Temple Gold / Brass
          600: '#B8860B',
          700: '#996515',
          800: '#6C480E',
          900: '#402905',
        },
        charcoal: {
          50: '#F7F6F5',
          100: '#ECE9E6',
          200: '#D6D0CB',
          300: '#B8AEA6',
          400: '#8A7D73',
          500: '#5F5349',
          600: '#4A3E36',
          700: '#382E27',
          800: '#2D241E', // Earth Brown / Charcoal
          900: '#1A1410',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'heritage': '0 4px 20px -2px rgba(122, 46, 30, 0.08), 0 2px 6px -1px rgba(212, 175, 55, 0.06)',
        'heritage-lg': '0 10px 30px -4px rgba(122, 46, 30, 0.12), 0 4px 12px -2px rgba(212, 175, 55, 0.1)',
        'diya-glow': '0 0 25px 5px rgba(212, 175, 55, 0.35)',
        'terracotta-glow': '0 0 25px 4px rgba(192, 86, 33, 0.25)',
      },
      backgroundImage: {
        'sandstone-gradient': 'linear-gradient(180deg, #FDFBF7 0%, #FAF4EB 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #7A2E1E 0%, #A43E1B 50%, #C05621 100%)',
        'brass-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 50%, #B8860B 100%)',
        'subtle-mandala': "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 70%)",
      }
    },
  },
  plugins: [],
}

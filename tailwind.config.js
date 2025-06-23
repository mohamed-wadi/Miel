/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: {
          50: '#fef7ed',
          100: '#fdedd4',
          200: '#fbd7a9',
          300: '#f8bb72',
          400: '#f5953a',
          500: '#f3771e',
          600: '#e45a13',
          700: '#bd4312',
          800: '#973615',
          900: '#7a2f16',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        moroccan: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        honey: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'honey-drip': 'honeyDrip 3s ease-in-out infinite',
        'bee-fly': 'beeFly 8s ease-in-out infinite',
        'arabic-float': 'arabicFloat 10s ease-in-out infinite',
        'moroccan-pattern': 'moroccanPattern 20s linear infinite',
        'golden-shimmer': 'goldenShimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        honeyDrip: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(10px) scale(1.1)', opacity: '1' },
        },
        beeFly: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -10px) rotate(5deg)' },
          '50%': { transform: 'translate(0, -20px) rotate(0deg)' },
          '75%': { transform: 'translate(-20px, -10px) rotate(-5deg)' },
        },
        arabicFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(2deg)' },
          '50%': { transform: 'translateY(-25px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-2deg)' },
        },
        moroccanPattern: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        goldenShimmer: {
          '0%, 100%': { 
            backgroundPosition: '-200% center',
            opacity: '0.8'
          },
          '50%': { 
            backgroundPosition: '200% center',
            opacity: '1'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'honey-gradient': 'linear-gradient(135deg, #f5953a 0%, #f3771e 50%, #e45a13 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #fef7ed 0%, #fdedd4 50%, #f5953a 100%)',
        'moroccan-gradient': 'linear-gradient(135deg, #d946ef 0%, #f5953a 50%, #eab308 100%)',
        'golden-shimmer': 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)',
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00ffff',
          purple: '#bf00ff',
          green: '#39ff14',
          pink: '#ff007f'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' 
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' 
          }
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00ffff40',
        'neon-purple': '0 0 20px #bf00ff40',
        'neon-green': '0 0 20px #39ff1440',
        'neon-pink': '0 0 20px #ff007f40',
      }
    },
  },
  plugins: [],
};
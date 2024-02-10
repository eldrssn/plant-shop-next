import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      header: 'Archivo',
    },
    extend: {
      colors: {
        backSecond: '#f6f2ea',
      },
      boxShadow: {
        checkout: '0 -2px 5px -3px #757373',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate(-15px)' },
          '50%': { transform: 'translate(15px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle .5s ease-in-out 1',
      },
    },
  },
  plugins: [],
};
export default config;

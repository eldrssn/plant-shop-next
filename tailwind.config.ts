import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      header: 'Archivo',
    },
    extend: {
      colors: {
        backSecond: '#f6f2ea',
      },
      backgroundImage: {
        'placeholder-image': "url('/pictures/placeholder_grey.png')",
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

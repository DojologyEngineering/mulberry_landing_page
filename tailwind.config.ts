import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#8A549F',
          light: '#BD82BE',
          'hight-light': '#EC018A',
        },
      },
      textColor: {
        secondary: '#333333',
      },
      backgroundColor: {
        footer: '#EAEAEA',
        centers: 'rgb(239,239,244)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        popin: ['var(--font-popin)'],
        raleway: ['var(--font-raleway)'],
        patrick: ['var(--font-patrick-hand)'],
        avenir: ['var(--font-avenir)'],
        helvetica: ['var(--font-helvetica)'],
      },
    },
  },
  plugins: [],
};
export default config;

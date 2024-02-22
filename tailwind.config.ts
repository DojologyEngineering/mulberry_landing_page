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
        black: {
          light: '#000000',
        },
      },
      backgroundColor: {
        primary: {
          main: '#9481C0',
          light: '#9551A9',
        },
        grey: {
          primary: '#EAEAEA',
          light: '#FAFAFA',
          main: '#EFEFF4',
          'hight-light': '#373B4D',
        },
        purple: {
          main: '#FEE5F3',
        },
      },
      textColor: {
        secondary: '#333333',
      },
      backgroundColor: {
        footer: '#EAEAEA',
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

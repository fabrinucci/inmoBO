import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'fit-1': 'repeat(auto-fit, minmax(100px, 1fr))',
        'fit-2': 'repeat(auto-fit, minmax(150px, 1fr))',
        'fit-3': 'repeat(auto-fit, minmax(200px, 1fr))',
        'fit-4': 'repeat(auto-fit, minmax(250px, 1fr))',
        'fit-5': 'repeat(auto-fit, minmax(350px, 1fr))',
        'fit-6': 'repeat(auto-fit, minmax(450px, 1fr))',

        'fill-1': 'repeat(auto-fill, minmax(100px, 1fr))',
        'fill-2': 'repeat(auto-fill, minmax(150px, 1fr))',
        'fill-3': 'repeat(auto-fill, minmax(200px, 1fr))',
        'fill-4': 'repeat(auto-fill, minmax(250px, 1fr))',
        'fill-5': 'repeat(auto-fill, minmax(350px, 1fr))',
        'fill-6': 'repeat(auto-fill, minmax(450px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;

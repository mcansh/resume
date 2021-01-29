const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./app/**/*.{js,jsx,ts,tsx,md,mdx}', './remix.config.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.blueGray,
        blue: {
          screen: '#1000f2',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

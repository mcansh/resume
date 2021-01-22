const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./app/**/*.ts",
    "./app/**/*.tsx",
    "./app/**/*.mdx",
    "./app/**/*.md",
    "./remix.config.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

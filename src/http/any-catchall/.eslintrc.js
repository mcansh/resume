module.exports = {
  extends: ['@mcansh/eslint-config/typescript'],
  parserOptions: {
    project: './app/tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      require('@mcansh/eslint-config/prettier.config'),
    ],
  },
};

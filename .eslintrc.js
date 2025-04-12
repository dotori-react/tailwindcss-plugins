const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['dotori-base', 'dotori-typescript'],
  ignorePatterns: ['**/dist', '**/node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      path.resolve(__dirname, './packages/dotori-tailwindcss-scrollbar/tsconfig.json'),
      path.resolve(__dirname, './packages/dotori-tailwindcss-autofill/tsconfig.json'),
    ],
    // project: ['./packages/dotori-tailwindcss-scrollbar/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [
          path.resolve(__dirname, './packages/dotori-tailwindcss-scrollbar/tsconfig.json'),
          path.resolve(__dirname, './packages/dotori-tailwindcss-autofill/tsconfig.json'),
        ],
      },
    },
  },
};

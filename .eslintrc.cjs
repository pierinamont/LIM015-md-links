module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    "jest/globals": true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
  plugins: [
    'jest',
  ],
};

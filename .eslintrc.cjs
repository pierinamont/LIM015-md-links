module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['off',
      {
        js: 'always',
      },
    ],
    'linebreak-style': 0,
    'import/prefer-default-export': false,
  },
  plugins: [
    'jest',
  ],
};

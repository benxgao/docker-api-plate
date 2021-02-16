import prettierRules from './.prettierrc.json';

module.exports = {
  env: { jest: true, node: true },
  extends: [
    'eslint:recommended'
  ],
  plugins: ['jest', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  settings: {
    'import/extensions': ['.js']
  },
  rules: {
    'prettier/prettier': ['error', prettierRules],
  },
};

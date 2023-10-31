module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
  rules: {
    'prefer-const': 'warn',
    'no-unused-vars': 'warn',
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'linebreak-style': 0,
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
  },
}

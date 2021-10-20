module.exports = {
  extends: ['standard'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ENV: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    quotes: 'single',
  },
}

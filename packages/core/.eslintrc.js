module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    // 参数后面不允许任何空格
    'space-before-function-paren': ['error', 'never'],
    // 尾随逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 'no-unused-vars': ['error', { args: 'none', argsIgnorePattern: '^_' }],
    'no-unused-vars': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'dot-notation': 'off',
  },
}

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react-refresh/only-export-components': 'warn',
    "import/newline-after-import": ["error", { "count": 1 }]
  },
}

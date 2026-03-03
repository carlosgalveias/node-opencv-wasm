module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  env: {
    node: true
  },
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    "no-console": 0
  },
  globals: {
    Promise: true,
    console: true,
    md: true,
    Chartist: true,
    Uint8Array: true,
    Uint16Array: true,
    BlueDarwinDiagrams: true,
    Set: true,
    global: true
  }
};

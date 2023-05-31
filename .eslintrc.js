/*
 * @Date: 2023-05-31 16:32:03
 * @LastEditors: 李鹏玺 2899952565@qq.com
 * @LastEditTime: 2023-05-31 17:57:37
 * @FilePath: /lx-js-tools/.eslintrc.js
 * @description: 123
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint'],
  rules: {}
}

/*
 * @Author: 段本显
 * @FilePath: \Vue3\.eslintrc.js
 * @Date: 2023-06-30 21:14:28
 * @LastEditors: 段本显
 * @LastEditTime: 2023-07-02 11:51:42
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
module.exports = {
  extends: [
    'proste/typescript',
    'proste/vue',
    'proste/vitest',
    './.eslintrc-auto-import.json',
  ],
  plugins: ['xyhxx'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'xyhxx/if-line': 1,
    'xyhxx/object-pattern-newline': 1,
    '@typescript-eslint/object-curly-spacing': [2, 'always'],
    'vue/mustache-interpolation-spacing': [2, 'always'],
    'arrow-parens': [2, 'always'],
    indent: [2, 2],
    '@typescript-eslint/indent': 0,
    'operator-linebreak': [2, 'after'],
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'never',
      },
    ],
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    'vue/component-tags-order': [
      2,
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'array-bracket-newline': [2, 'consistent'],
  },
  overrides: [
    {
      files: ['cypress/**', 'cypress.config.ts'],
      plugins: ['cypress'],
      parserOptions: {
        project: './cypress/tsconfig.json',
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: true,
      },
      env: {
        'cypress/globals': true,
      },
    },
  ],
};

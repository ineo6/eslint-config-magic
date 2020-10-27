module.exports = {
  extends: [
    'airbnb-base/legacy',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    'max-len': ['error', 150],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-debugger': 1,
    // prettier conflict
    'space-before-function-paren': 0,
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
  },
};

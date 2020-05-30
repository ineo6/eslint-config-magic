module.exports = {
  extends: ['airbnb-base', './base.js', './rules/import.js'],
  rules: {
    'linebreak-style': 0,
    'func-names': 0,
    'max-len': ['error', 150],
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': 0,
    'prefer-destructuring': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'no-tabs': 0,
    'spaced-comment': 0,
    semi: 0,
    // todo enable
    'prefer-const': 0,
    'no-plusplus': 0,
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'function-paren-newline': 0,
    // todo enable
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-param-reassign': 0,
    'object-shorthand': 0,
    'no-useless-constructor': 0,
    // todo 自动格式化期间
    'object-curly-spacing': 0,
    'prefer-template': 0,
    'object-curly-newline': 0,
    'no-debugger': 1,
    'class-methods-use-this': 0,
    'no-restricted-syntax': 0,
    'quote-props': 1,
    'consistent-return': 0,
    'no-multi-spaces': 0,
    'array-callback-return': 0,
    eqeqeq: 0,
    'no-else-return': 0,
    'one-var': 0,
    'no-return-assign': 0,
    'perfer-const': 0,
    // todo remove
    'no-script-url': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'guard-for-in': 0,
    // todo error
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
  }
};

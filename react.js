module.exports = {
  extends: ['airbnb', './rules/jsx-a11y.js', './index.js'],
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/sort-comp': 0,
    'react/jsx-no-bind': 0,
    'react/no-multi-comp': 1,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0
  }
};

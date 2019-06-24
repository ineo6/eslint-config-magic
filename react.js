module.exports = {
    extends: ['airbnb', './index.js','./rules/jsx-a11y.js'],
    rules: {
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-closing-bracket-location': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        // todo enable
        'react/prefer-stateless-function': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-no-bind': 0,
        // todo enable
        'react/no-multi-comp': 0,
        // todo
        'react/no-unused-state': 0,
        // todo enable
        'react/no-array-index-key': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 0,
        // todo remove
        'react/prefer-es6-class': 0,
        'react/no-string-refs': 0,
        'react/jsx-boolean-value': 0,
        // todo remove
        'react/jsx-tag-spacing': 0,
        'react/no-did-mount-set-state': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-space-before-closing': 0,
        // todo error
        'react/jsx-closing-tag-location': 0,
        'react/destructuring-assignment': 0,
        'react/button-has-type': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-wrap-multilines': ['error', { prop: 'ignore' }],
    }
};

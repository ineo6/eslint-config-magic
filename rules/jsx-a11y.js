module.exports = {
  plugins: [
    'jsx-a11y',
    'react'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/alt-text': 0,
    // todo check
    'jsx-a11y/label-has-associated-control': 0,
  },
};

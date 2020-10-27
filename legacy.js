module.exports = {
  extends: ['./base'],
  env: {
    amd: false,
    jasmine: false,
    node: true,
    mocha: true,
    builtin: true,
    es6: false,
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  rules: {},
};

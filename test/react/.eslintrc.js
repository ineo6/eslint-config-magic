module.exports = {
  extends: ['../base/.eslintrc.js'],
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: ['react'],
};

module.exports = {
  settings: {
    'react': {
      version: '16.2.0',
    },
  },
  rules: {
    /**
     * 禁止在 componentDidUpdate 里使用 setState
     */
    'react/no-did-update-set-state': 'error',
  },
};

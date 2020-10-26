const { rules: baseImportsRules } = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        // Allow import and resolve for *.ts modules.
        extensions: ['.d.ts', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.d.ts', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // workaround before support extends in overrides: https://github.com/eslint/eslint/issues/8813
      rules: {
        /** https://github.com/eslint/eslint/issues/11464 */
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/indent': [
          2,
          2,
          {
            SwitchCase: 1,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': [
          baseImportsRules['import/extensions'][0],
          baseImportsRules['import/extensions'][1],
          {
            ...baseImportsRules['import/extensions'][2],
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
};

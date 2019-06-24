module.exports = {
    extends: ['./index.js', "plugin:@typescript-eslint/eslint-recommended"],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
            },
            settings: {
                'import/resolver': {
                    node: {
                        // Allow import and resolve for *.ts modules.
                        extensions: ['.d.ts', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
                    },
                },
            },
            plugins: ['@typescript-eslint'],
            // workaround before support extends in overrides: https://github.com/eslint/eslint/issues/8813
            rules: {
                /** https://github.com/eslint/eslint/issues/11464 */
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'warn',
                /** https://github.com/yannickcr/eslint-plugin-react/issues/2187 */
                'react/prefer-stateless-function': 'off',
                'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
                '@typescript-eslint/indent': [
                    2,
                    2,
                    {
                        SwitchCase: 1,
                    },
                ],
                '@typescript-eslint/explicit-member-accessibility': 'off',
            },
        },

    ]
};

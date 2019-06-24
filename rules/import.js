module.exports = {
    env: {
        es6: true,
    },

    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },

    plugins: ['import'],

    rules: {
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        // todo enable
        'import/extensions': [
            0,
            'never',
            {
                ignorePackages: true,
            },
        ],
        // todo enable
        'import/named': 1,
    },
};

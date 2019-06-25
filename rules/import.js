module.exports = {
    env: {
        es6: true,
    },

    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },

    plugins: ['import'],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.jsx', '.json']
            }
        },
        'import/extensions': [
            '.js',
            '.mjs',
            '.jsx',
        ],
    },

    rules: {},
};

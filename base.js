module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true
        },
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        requireConfigFile: false,
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true
};

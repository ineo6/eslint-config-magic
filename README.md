# Magic ESLint 规则

统一 ESLint 配置规范。

## 安装

```
npm install eslint-config-magic --save-dev
```

### 安装其依赖（peerDependencies）

```sh
npx install-peerdeps --dev eslint-config-magic
```

## 规则列表

| 名称 | 包含规则 | 解析器 |
| --- | --- | --- |
| [标准规则](#标准规则) | [ESLint 规则][] | [babel-eslint][] |
| [React](#react) | ESLint 规则、[eslint-plugin-react][] | babel-eslint |
| [TypeScript](#typescript) | ESLint 规则、[@typescript-eslint][] |[@typescript-eslint/parser][] |
| [TypeScript React](#typescript-react) | ESLint 规则、@typescript-eslint、eslint-plugin-react | @typescript-eslint/parser |

[babel-eslint]: https://github.com/babel/babel-eslint
[@typescript-eslint/parser]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
[ESLint 规则]: https://eslint.org/docs/rules/
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[@typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

## 使用方法

### 标准规则

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'magic',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false,
        // $: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置:
    }
};
```

### React

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'magic',
        'magic/react',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置:
    }
};
```

### TypeScript

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'magic',
        'magic/typescript',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置：
    }
};
```

### TypeScript React

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'magic',
        'magic/react',
        'magic/typescript',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置:
    }
};
```

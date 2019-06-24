# Magic ESLint 规则


统一 ESLint 配置规范。


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

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import eslint-config-magic
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-magic',
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

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-magic
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-magic/react',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置:
    }
};
```

### TypeScript

安装：

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/eslint-plugin eslint-config-magic
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-magic/typescript',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置：
    }
};
```

### TypeScript React

安装：

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-config-magic
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-magic/react',
        'eslint-config-magic/typescript',
    ],
    rules: {
        // 这里填入你的项目需要的个性化配置:
    }
};
```

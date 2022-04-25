# Magic ESLint 规则

统一 ESLint 配置规范。

## 使用方法

### 标准规则

```shell
npm install eslint@7 @babel/core @babel/eslint-parser eslint-config-magic --save-dev
```

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
  },
};
```

### React

```shell
npm install eslint@7 @babel/core @babel/eslint-parser @babel/preset-react@latest eslint-plugin-react eslint-config-magic --save-dev
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: [
    'magic',
    'magic/react',
  ],
  rules: {
    // 这里填入你的项目需要的个性化配置:
  },
};
```

### Vue 2

```shell
npm install eslint@7 @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue eslint-config-magic --save-dev
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: [
    'magic',
    'magic/vue',
  ],
  rules: {
    // 这里填入你的项目需要的个性化配置:
  },
};
```

### TypeScript React

```shell
npm install eslint@7 typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-magic --save-dev
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: [
    'magic',
    'magic/react',
    'magic/typescript',
  ],
  rules: {
    // 这里填入你的项目需要的个性化配置：
  },
};
```

### JS + TS 混合（React）

```shell
npm install eslint@7 @babel/core @babel/eslint-parser typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-magic --save-dev
```

```js
module.exports = {
  'extends': [
    'magic',
    'magic/react',
  ],
  'rules': {
  },
  'overrides': [
    {
      'files': [
        '**/*.ts',
        '**/*.tsx',
      ],
      'extends': [
        'magic/typescript',
      ],
      'rules': {},
    },
  ],
};
```

### TypeScript

```shell
npm install eslint@7 typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-magic --save-dev
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
  extends: [
    'magic',
    'magic/typescript',
  ],
  rules: {
    // 这里填入你的项目需要的个性化配置：
  },
};
```

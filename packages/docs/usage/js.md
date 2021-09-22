
# 在 JavaScript 中使用

## 通过 import 引入

1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/core

# 通过 yarn 安装
yarn add @right-menu/core
```

2. 使用

```js
import RightMenu from '@right-menu/core'

new RightMenu('.box', [
  {
    type: 'li',
    text: '按钮'
  }
])
```

## 通过 script 标签引入

```html
<div class="box" style="height: 300px; background: #ccc"></div>

<script src="../dist/right-menu.umd.js"></script>
<script>

  new RightMenu('.box', [
    {
      type: 'li',
      text: '按钮'
    }
  ])

</script>
```

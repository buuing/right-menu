
### 通过 script 标签使用 (JS)

- `CDN链接`: https://cdn.jsdelivr.net/npm/@right-menu/core/dist/right-menu.umd.min.js

```html
<div id="box" style="height: 300px; background: #ccc"></div>

<script src="https://cdn.jsdelivr.net/npm/@right-menu/core/dist/right-menu.umd.min.js"></script>
<script>
  new RightMenu('#box', [
    {
      type: 'li', // type为li是普通按钮
      text: '复制(C)', // 按钮的名称
      callback: () => alert('点击了复制') // 回调函数
    }
  ])
</script>
```

<br />

### 通过 import 使用 (JS)

1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/core

# 通过 yarn 安装
yarn add @right-menu/core
```

2. 使用插件

```js
import RightMenu from '@right-menu/core'

new RightMenu('#box', [
  {
    type: 'li', // type为li是普通按钮
    text: '复制(C)', // 按钮的名称
    callback: () => alert('点击了复制') // 回调函数
  }
])
```

<br />

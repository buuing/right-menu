

### 通过 import 使用 (Vue)

#### 1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/vue

# 通过 yarn 安装
yarn add @right-menu/vue
```

#### 2. 使用插件

在 `main.js` 入口文件中添加代码

```js
import RightMenu from '@right-menu/vue'

Vue.use(RightMenu)
```

#### 3. 在 `xxx.vue` 中使用

```vue
<template>
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        type: 'li', // type为li是普通按钮
        text: '复制(C)', // 按钮的名称
        callback: () => alert('点击了复制') // 回调函数
      }]
    }
  }
}
</script>
```


<br />

### 通过 script 标签使用 (Vue)

- `CDN链接`: https://cdn.jsdelivr.net/npm/@right-menu/vue/dist/rightMenu.umd.min.js

```html
<div id="app">
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
</div>

<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@right-menu/vue/dist/rightMenu.umd.min.js"></script>
<script>
  new Vue({
    el: '#app',
    data () {
      return {
        options: [{
          type: 'li', // type为li是普通按钮
          text: '复制(C)', // 按钮的名称
          callback: () => alert('点击了复制') // 回调函数
        }]
      }
    }
  })
</script>
```

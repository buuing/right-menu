
# 在 Vue 中使用

## 通过 import 引入

1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/vue

# 通过 yarn 安装
yarn add @right-menu/vue
```

2. 引入插件

在 `main.js` 入口文件中添加代码

<RecoDemo :collapse="true">
  <template slot="code-vue2.x">
    <<< @/usage/vue/vue2.js
  </template>
  <template slot="code-vue3.x">
    <<< @/usage/vue/vue3.js
  </template>
</RecoDemo>


3. 在 xxx.vue 中使用

<RecoDemo :collapse="true">
  <template slot="code-指令组件">
    <<< @/usage/vue/directive.vue
  </template>
</RecoDemo>


  <!-- <template slot="code-普通组件">
    @/usage/vue/abstract.vue
  </template> -->

<br />

## 通过 script 标签引入

- **CDN链接：** https://cdn.jsdelivr.net/npm/vue-right-menu/dist/rightMenu.umd.min.js

```html
<div id="app">
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
</div>

<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-right-menu/dist/rightMenu.umd.min.js"></script>
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

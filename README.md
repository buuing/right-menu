
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/buuing/cdn/imgs/right-menu.png" width="128" />
  <h1>right-menu</h1>
  <p>一个基于vue的右键菜单插件, 通过添加指令的方式可以展示不同的菜单内容</p>
  <p>
    <a href="https://github.com/buuing/right-menu/stargazers" target="_black">
      <img src="https://img.shields.io/github/stars/buuing/right-menu?color=%23807bef&logo=github&style=flat-square" alt="stars" />
    </a>
    <a href="https://github.com/buuing/right-menu/network/members" target="_black">
      <img src="https://img.shields.io/github/forks/buuing/right-menu?color=%23807bef&logo=github&style=flat-square" alt="forks" />
    </a>
    <a href="https://github.com/buuing" target="_black">
      <img src="https://img.shields.io/badge/Author-%20buuing%20-4195a5.svg?&logo=github&style=flat-square" alt="author" />
    </a>
    <a href="https://github.com/buuing/vue-right-menu/blob/master/LICENSE" target="_black">
      <img src="https://img.shields.io/github/license/buuing/vue-right-menu?color=%234195a5&logo=github&style=flat-square" alt="license" />
    </a>
  </p>
</div>

  <table align="center">
    <thead align="center">
      <tr>
        <th>适配框架</th>
        <th>npm包</th>
        <th>最新版本</th>
        <th>npm下载量</th>
        <th>CDN使用量</th>
      </tr>
    </thead>
    <tbody align="center">
      <tr>
        <td>
          <b>JS / TS</b>
        </td>
        <td>
          <a href="https://buuing.github.io/right-menu/usage/js.html" target="_black">@right-menu/core</a>
        </td>
        <td>
          <img src="https://img.shields.io/npm/v/@right-menu/core?color=%23ffba15&logo=npm&style=flat-square" alt="version" />
        </td>
        <td>
          <a href="https://www.npmjs.com/package/@right-menu/core" target="_black"><img src="https://img.shields.io/npm/dm/@right-menu/core?color=%23ffba15&logo=npm&style=flat-square" alt="downloads" /></a>
        </td>
        <td>
          <a href="https://www.jsdelivr.com/package/npm/@right-menu/core" target="_black"><img src="https://data.jsdelivr.com/v1/package/npm/@right-menu/core/badge" alt="downloads" /></a>
        </td>
      </tr>
      <tr>
        <td>
          <b>Vue</b>
        </td>
        <td>
          <a href="https://buuing.github.io/right-menu/usage/vue.html" target="_black">@right-menu/vue</a>
        </td>
        <td>
          <img src="https://img.shields.io/npm/v/@right-menu/vue?color=%23ffba15&logo=npm&style=flat-square" alt="version" />
        </td>
        <td>
          <a href="https://www.npmjs.com/package/@right-menu/vue" target="_black"><img src="https://img.shields.io/npm/dm/@right-menu/vue?color=%23ffba15&logo=npm&style=flat-square" alt="downloads" /></a>
        </td>
        <td>
          <a href="https://www.jsdelivr.com/package/npm/@right-menu/vue" target="_black"><img src="https://data.jsdelivr.com/v1/package/npm/@right-menu/vue/badge" alt="downloads" /></a>
        </td>
      </tr>
      <tr>
        <td>
          <b>React</b>
        </td>
        <td>
          <a href="https://buuing.github.io/right-menu/usage/react.html" target="_black">@right-menu/react</a>
        </td>
        <td>
          <img src="https://img.shields.io/npm/v/@right-menu/react?color=%23ffba15&logo=npm&style=flat-square" alt="version" />
        </td>
        <td>
          <a href="https://www.npmjs.com/package/@right-menu/react" target="_black"><img src="https://img.shields.io/npm/dm/@right-menu/react?color=%23ffba15&logo=npm&style=flat-square" alt="downloads" /></a>
        </td>
        <td>
          <a href="https://www.jsdelivr.com/package/npm/@right-menu/react" target="_black"><img src="https://data.jsdelivr.com/v1/package/npm/@right-menu/react/badge" alt="downloads" /></a>
        </td>
      </tr>
    </tbody>
  </table>


<br />


## 演示 Demo

https://buuing.github.io/right-menu/

<br />

## 使用 Usage

<details open>
<summary>
在 <code>JS / TS</code> 中使用
</summary>

<br />


### 通过 `import` 使用 (JS)

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

### 通过 `script` 标签使用 (JS)

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


</details>

<br />

<details>
<summary>
在 <code>Vue</code> 中使用
</summary>

<br />


### 通过 `import` 使用 (Vue)

1. 安装插件

```shell
# 通过 npm 安装
npm install @right-menu/vue

# 通过 yarn 安装
yarn add @right-menu/vue
```

2. 使用插件

在 `main.js` 入口文件中添加代码

```js
import rightMenu from '@right-menu/vue'

Vue.use(rightMenu)
```

在 `xxx.vue` 中使用

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

### 通过 `script` 标签使用 (Vue)

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


</details>

<br />

<details open>
<summary>
在 <code>React</code> 中使用
</summary>

<br />

暂无

</details>

<br />

## 贡献者

+ **🤖 `核心开发`：** 实现了某个重要的功能 / 核心逻辑, 或者是提交过多次PR
+ **🦄 `逻辑优化`：** 优化了某处逻辑问题, 对代码的性能做出了贡献
+ **🛰 `基础建设`：** 完善项目的打包发布流程, 优化了一些项目构建相关
+ **🚧 `需求功能`：** 参与项目的需求开发, 提交PR完成合并
+ **🛠 `修复bug`：** 修复了某个可能会导致代码运行的漏洞
+ **📚 `维护文档`：** 参与了文档的开发 / 维护 / 翻译

<table>
  <tr>
    <td align="center"><a href="https://github.com/buuing" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/36689704"></a><div><span title="核心开发">🤖</span> <span title="基础建设">🛰</span> <span title="维护文档">📚</span></div></td>
    <td align="center"><a href="https://github.com/qingtiantongxie" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/24731632"></a><div><span title="核心开发">🤖</span> <span title="基础建设">🛰</span> <span title="需求功能">🚧</span></div></td>
    <td align="center"><a href="https://github.com/Deja-vuuu" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/27748682"></a><div><span title="核心开发">🤖</span> <span title="基础建设">🛰</span></div></td>
    <td align="center"><a href="https://github.com/yushen7" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/35678187"></a><div><span title="核心开发">🤖</span> <span title="修复bug">🛠</span></div></td>
    <td align="center"><a href="https://github.com/dora1995" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/53267289"></a><div><span title="修复bug">🛠</span></div></td>
  </tr>
</table>

<br />

## 需求计划

- `📆 进行中`
  - [ ] 🤖 增加初始化高级配置, 可以设置一些全局的选项, 以及菜单创建的生命周期 - buuing
  - [ ] 🚧 增加icon选项, 可以使用一些内置图标, 想法可以让用户自由使用外部的svg图标
  - [ ] 📚 [补全文档中`react`的`hooks`使用方式](https://buuing.github.io/right-menu/usage/react.html) - `yox`

- `💡 待认领`
  - [ ] 🛠 [**在mac系统下, 第二次点击控制台时 blur 事件没有触发**](https://github.com/buuing/vue-right-menu/issues/10)
  - [ ] 🚧 增加 XP / win7 两种经典菜单主题样式
  - [ ] 🚧 随着浏览器放大/缩小时, 将菜单组件尽可能的维持在同一个大小
  - [ ] 🛰 给`core`包增加`eslint-standard`规范, 保存时校验
  - [ ] 🤖 看看能否对外暴露一个作用域插槽或者是render函数, 来渲染jsx?

<br />

## 历史功能更新记录

  - [x] 增加`@right-menu/vue`的包, 并支持`vue2/3` - *buuing*
  - [x] 点击非窗口区域时, 看看能不能监听到然后关闭菜单 - *buuing*
  - [x] 支持`new RightMenu('#box', async () => [])`异步返回菜单数据 - *buuing*
  - [x] 菜单的宽度根据文字长度做到自适应 - *buuing*
  - [x] 增加`class`和`style`选项, 可以给当前标签添加类和样式 - *buuing*
  - [x] 增加不同的主题样式: mac / win10 - *buuing*
  - [x] 自动根据操作系统切换主题, 并做到自适应`mac`的白天/黑夜模式 - *qingtiantongxie*
  - [x] 异步等待期间增加菜单骨架来作为缓冲, 减少用户等待的焦虑 - *qingtiantongxie*
  - [x] 增加了三级菜单 / 多级菜单的逻辑处理, 并自动计算剩余位置来切换渲染方向 - *yushen7*

<br />

## 友情链接

- [🎁 lucky-canvas 一个跨平台、兼容多端的【大转盘 / 九宫格】抽奖插件](https://github.com/LuckDraw/lucky-canvas)

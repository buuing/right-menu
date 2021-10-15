
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

### 通过 `import` 使用

1. 安装插件

```shell
# 通过 npm 安装
npm install vue-right-menu

# 通过 yarn 安装
yarn add vue-right-menu
```

2. 使用插件

在 `main.js` 入口文件中添加代码

```js
import rightMenu from 'vue-right-menu'

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

### 通过 `script` 标签使用

- `CDN链接`: https://cdn.jsdelivr.net/npm/vue-right-menu/dist/rightMenu.umd.min.js

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


<br />

## 插件选项

给对应的元素添加`v-menu`的指令, 菜单栏的内容以及回调函数可以自定义

<details>
<summary>
<code>vue-right-menu@1.x</code> 旧版本选项
</summary>

<br />

| 参数选项  | a链接 | 普通按钮 | 二级菜单 | 分割线
|  :-:     | :-:   | :-:     | :-: | :-:
| type     |  a   |   li    |  ul  | hr 
| title    |  √   |   √     |  √   | × 
| href     |  √   |   ×     |  ×   | × 
| func     |  ×   |   √     |  ×   | × 
| disabled |  √   |   √     |  √   | × 
| children |  ×   |   ×     |  √   | × 

</details>

<br />

<details open>
<summary>
<code>vue-right-menu@2.x</code> 新版本选项
</summary>

<br />

| 参数选项  | type | text | href | callback | disabled | children | class | icon |
| :-:      | :-:  | :-:  | :-:  |    :-:   |   :-:    |    :-:   |  :-:  | :-:  |
| 普通按钮   |  li  |  √   |  ×   |    ×     |   √      |    ×     |   -   |  -   |
| 二级菜单   |  ul  |  √   |  ×   |    √     |   √      |    √     |   -   |  -   |
| 分割线     |  hr  |  ×   |  ×   |    ×     |   ×      |    ×     |   -   |  -   |

</details>

<br />

## 完整示例

<details>
<summary>
<code>vue-right-menu@1.x</code> 旧版本完整示例
</summary>

<br />

```html
<template>
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          type: 'li', // type为li是普通按钮
          title: '复制(C)', // 按钮的名称
          func: () => alert('点击了复制') // 回调函数
        }, {
          type: 'li',
          title: '粘贴(V)',
          disabled: true, // 不可点击状态, 回调函数自然无法触发
          func: () => alert('点击了粘贴')
        }, {
          type: 'hr' // 分割线, 无需其他参数
        }, {
          type: 'ul', // type为ul是二级菜单
          title: '新建(W)',
          children: [ // children里面配置二级菜单列表, 不支持三级菜单
            {
              type: 'li',
              title: '文件夹(F)',
              func: () => alert('新建了文件夹')
            }, {
              type: 'li',
              title: '快捷方式(S)',
              func: () => alert('新建了快捷方式')
            }, {
              type: 'hr'
            }, {
              type: 'li',
              title: '文本文档'
            }, {
              type: 'li',
              title: 'Work 文档'
            }, {
              type: 'li',
              title: 'Excel 表格'
            }, {
              type: 'li',
              title: 'WinRAR 压缩文件'
            }
          ]
        }, {
          type: 'hr'
        }, {
          type: 'li',
          title: '属性(R)',
          func: () => alert('点击了属性')
        }
      ]
    }
  }
}
</script>
```

</details>

<br />

<details>
<summary>
<code>vue-right-menu@2.x</code> 新版本完整示例
</summary>

<br />

```html
<template>
  <div v-menu="options" style="height: 300px; background-color: #82acff"></div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          type: 'li', // type为li是普通按钮
          text: '复制(C)', // 按钮的名称
          callback: () => alert('点击了复制') // 回调函数
        }, {
          type: 'li',
          text: '粘贴(V)',
          disabled: true, // 不可点击状态, 回调函数自然无法触发
          callback: () => alert('点击了粘贴')
        }, {
          type: 'hr' // 分割线, 无需其他参数
        }, {
          type: 'ul', // type为ul是二级菜单
          text: '新建(W)',
          children: [ // children里面配置二级菜单列表, 不支持三级菜单
            {
              type: 'li',
              text: '文件夹(F)',
              callback: () => alert('新建了文件夹')
            }, {
              type: 'li',
              text: '快捷方式(S)',
              callback: () => alert('新建了快捷方式')
            }, {
              type: 'hr'
            }, {
              type: 'li',
              text: '文本文档'
            }, {
              type: 'li',
              text: 'Work 文档'
            }, {
              type: 'li',
              text: 'Excel 表格'
            }, {
              type: 'li',
              text: 'WinRAR 压缩文件'
            }
          ]
        }, {
          type: 'hr'
        }, {
          type: 'li',
          text: '属性(R)',
          callback: () => alert('点击了属性')
        }
      ]
    }
  }
}
</script>
```

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
    <td align="center"><a href="https://github.com/yushen7" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/35678187"></a><div><span title="核心开发">🤖</span></div></td>
    <td align="center"><a href="https://github.com/dora1995" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/53267289"></a><div><span title="修复bug">🛠</span></div></td>
  </tr>
</table>

<br />

## 需求计划

- `📆 进行中`
  - [ ] 🤖 增加初始化高级配置, 可以设置一些全局的选项, 以及菜单创建的生命周期 - buuing
  - [ ] 🚧 增加icon选项, 可以使用一些内置图标, 想法可以让用户自由使用外部的svg图标
  - [ ] 🚧 后续也可以继续优化一下三级菜单的方向 - `yox`
  - [ ] 📚 [补全文档中`react`的`hooks`使用方式](https://buuing.github.io/right-menu/usage/react.html) - `yox`

- `💡 待认领`
  - [ ] 🛠 [**在mac系统下, 第二次点击控制台时 blur 事件没有触发**](https://github.com/buuing/vue-right-menu/issues/10)
  - [ ] 🚧 增加 XP / win7 两种经典菜单主题样式
  - [ ] 🚧 随着浏览器放大/缩小时, 将菜单组件尽可能的维持在同一个大小
  - [ ] 🛰 给core包增加eslint-standard规范, 保存时校验
  - [ ] 🤖 看看能否对外暴露一个作用域插槽或者是render函数, 来渲染jsx?

<br />

## 历时更新记录

- `🎯 v2.0.0`
  - [x] ~当前组件增加对vue3的支持~
  - [x] ~把css样式和js逻辑打包到一个umd包里面, 以便于`script`标签引入~

- `🎯 v2.0.1`
  - [x] ~点击非窗口区域时, 看看能不能监听到然后关闭菜单~
  - [x] ~尝试支持`Vue.use(rightMenu, async () => [])`异步返回~

- `🎯 v2.0.2`
  - [x] ~菜单的宽度根据文字长度做到自适应~
  - [x] ~增加不同的主题样式: mac / win10, 看看能不能根据系统自动切换主题~
  - [x] ~修复了安装缺少脚本报错的问题~

- `🎯 v2.0.3`
  - [x] ~目前最多支持二级菜单, 后续增加三级菜单 / 多级菜单的逻辑~
  - [x] ~增加class和style选项, 可以给当前标签添加样式~
  - [x] ~修复了异步渲染菜单时, 无法完全清除历史组件的问题~

<!-- - 自适应系统的主题色 (mac的暗黑模式)  -->

<br />

## 友情链接

- [🎁 lucky-canvas 一个跨平台、兼容多端的【大转盘 / 九宫格】抽奖插件](https://github.com/LuckDraw/lucky-canvas)

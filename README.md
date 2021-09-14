
<div align="center">
  <h1>vue-right-menu</h1>
  <p>一个基于vue的右键菜单插件, 通过添加指令的方式可以展示不同的菜单内容</p>
  <p>
    <a href="https://github.com/buuing/vue-right-menu/stargazers" target="_black">
      <img src="https://img.shields.io/github/stars/buuing/vue-right-menu?color=%238aacf9&logo=github&style=flat-square" alt="stars" />
    </a>
    <a href="https://github.com/buuing/vue-right-menu/network/members" target="_black">
      <img src="https://img.shields.io/github/forks/buuing/vue-right-menu?color=%238aacf9&logo=github&style=flat-square" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/vue-right-menu" target="_black">
      <img src="https://img.shields.io/npm/v/vue-right-menu?color=%238aacf9&logo=npm&style=flat-square" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/vue-right-menu" target="_black">
      <img src="https://img.shields.io/npm/dm/vue-right-menu?color=%238aacf9&logo=npm&style=flat-square" alt="downloads" />
    </a>
    <a href="https://www.jsdelivr.com/package/npm/vue-right-menu" target="_black">
      <img src="https://data.jsdelivr.com/v1/package/npm/vue-right-menu/badge" alt="downloads" />
    </a>
  </p>
  <p>
    <a href="https://github.com/buuing" target="_black">
      <img src="https://img.shields.io/badge/Author-%20buuing%20-4195a5.svg?&logo=github&style=flat-square" alt="author" />
    </a>
    <a href="https://github.com/buuing/vue-right-menu/blob/master/LICENSE" target="_black">
      <img src="https://img.shields.io/github/license/buuing/vue-right-menu?color=%232dce89&logo=github&style=flat-square" alt="license" />
    </a>
  </p>
</div>

<br />


## 演示 Demo

https://buuing.github.io/vue-right-menu/

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
<div id="#app">
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
| a链接     |  a   |  √   |  √   |    ×     |   √      |    ×     |   -   |  -   |
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
          type: 'a', // type为a时可以点击跳转
          title: '百度一下',
          href: 'http://www.baidu.com'
        }, {
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
          type: 'a', // type为a时可以点击跳转
          text: '百度一下',
          href: 'http://www.baidu.com'
        }, {
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

<table>
  <tr>
    <td align="center"><a href="https://github.com/buuing" target="_blank"><img width="50px" src="https://avatars.githubusercontent.com/u/36689704?v=4"></a><div><span title="核心开发">🤖</span> <span title="修复bug">🚧</span> <span title="维护文档">📚</span></div></td>
  </tr>
</table>

<br />

## 更新计划

- [ ] 搭建官网文档详细描述插件如何引入和使用
- [x] ~当前组件增加对vue3的支持~
- [x] ~把css样式和js逻辑打包到一个umd包里面, 以便于`script`标签引入~
- [ ] **增加不同的主题样式: mac / win7 / win10, 看看能不能根据系统自动切换主题**
- [ ] **自适应系统的主题色 (mac的暗黑模式)**
- [ ] **菜单的宽度根据文字长度做到自适应**
- [ ] **点击非窗口区域时, 看看能不能监听到然后关闭菜单**
- [ ] **浏览器放大之后, 看看能否保持跟系统菜单同样的大小**
- [ ] **增加class选项, 可以给当前标签添加类样式**
- [ ] **增加icon选项, 可以使用一些内置图标, 图片待定**
- [ ] 尝试支持`Vue.use(rightMenu, async () => [])`异步返回
- [ ] 增加初始化高级配置, 可以设置一些全局的选项, 以及菜单创建的生命周期
- [ ] 目前最多支持二级菜单, 后续增加三级菜单 / 多级菜单的逻辑
- [ ] 看看能否对外暴露一个作用域插槽或者是render函数, 来渲染jsx?


## 友情链接

> ...

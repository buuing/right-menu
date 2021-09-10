
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


<br>

## 演示 Demo

https://buuing.github.io/vue-right-menu/

<br>

## 安装

> `npm install vue-right-menu`

> `yarn add vue-right-menu`

<br>

## 使用

安装完成后, 在`main.js`入口文件中添加如下代码

```js
import rightMenu from 'vue-right-menu'

Vue.use(rightMenu)
```

<br>

给对应的元素添加`v-menu`的指令, 菜单栏的内容以及回调函数可以自定义

| 参数选项  | a链接 | 普通按钮 | 二级菜单 | 分割线
|  :-:     | :-:   | :-:     | :-: | :-:
| type     |  a   |   li    |  ul  | hr 
| title    |  √   |   √     |  √   | × 
| href     |  √   |   ×     |  ×   | × 
| func     |  ×   |   √     |  ×   | × 
| disabled |  √   |   √     |  √   | × 
| children |  ×   |   ×     |  √   | × 

<br>

## 示例

```html
<template>
  <div id="ldq" v-menu="items"></div>
</template>

<script>
export default {
  data () {
    return {
      items: [
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

<style>
  #ldq {
    height: 500px;
    background-color: #82acff;
  }
</style>
```

## 更新计划

- [x] 当前组件增加对vue3的支持
- [ ] 目前最多支持二级菜单, 后续增加三级菜单 / 多级菜单的逻辑
- [ ] 把css样式和js逻辑打包到一个umd包里面, 以便于`script`标签引入
- [ ] 搭建官网文档详细描述插件如何引入和使用
- [ ] 增加不同的主题样式: mac / win7 / win10 / win11
- [ ] 增加内置图标

## 友情链接

- ...

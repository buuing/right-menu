
## 介绍

一个基于vue的右键菜单插件, 通过添加指令的方式可以展示不同的菜单内容

<br>

## Demo

https://100px.net/vue-right-menu/

<br>

## 安装

> `npm i vue-right-menu --save-dev`

<br>

## 使用

安装完成后, 在`main.js`入口文件中添加如下代码

```js
import rightMenu from 'vue-right-menu'
import 'vue-right-menu/src/index.css'

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

> **但是需要注意, 目前不支持三级菜单!!!**
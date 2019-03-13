
### 介绍

一个基于vue的右键菜单插件, 通过添加指令的方式可以创建不同的列表

### Demo

http://www.baidu.com

### 安装

> `npm i vue-right-menu --save-dev`

### 使用

安装完成后, 在`main.js`入口文件中添加如下代码

```js
import rightMenuPro from 'vue-right-menu/src/index.js'
import 'vue-right-menu/src/index.css'
```

给对应的元素添加`v-menu`的指令, 菜单栏的内容以及回调函数可以自定义

参数选项 | a链接 | 普通按钮 | 二级菜单 | 分割线
:-: | :-: | :-: | :-:
type     | a | li | ul | hr |
title    | √ | √  | √  | × |
href     | √ | ×  | ×  | × |
func     | × | √  | ×  | × |
disabled | √ | √  | √  | × |
children | × | ×  | √  | × |

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
          type: 'a',  // type为a时可以点击跳转
          title: '百度一下',
          href: 'http://www.baidu.com'
        }, {
          type: 'li',
          title: '复制(C)',
          func: () => alert('点击了复制')
        }, {
          type: 'li',
          title: '粘贴(V)',
          disabled: true,
          func: () => alert('点击了粘贴')
        }, {
          type: 'hr'
        }, {
          type: 'ul',
          title: '新建(W)',
          children: [
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

但是需要注意, 目前不支持三级菜单!!!
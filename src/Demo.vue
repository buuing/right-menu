<template>
  <div v-menu="options" style="height: 50vh; background-color: #ccc">
    <div>div</div>
    <span>span</span>
    <input type="text" v-menu="[{ type: 'li', text: '这是一个input输入框' }]">
  </div>
</template>

<script>
import { name, version } from '../package.json'
export default {
  data () {
    return {
      options: [
        {
          type: 'ul',
          text: `关于 ${name}`,
          children: [
            {
              type: 'li',
              text: `当前版本 ${version}`
            },
            {
              type: 'li',
              text: '入门教程'
            },
            {
              type: 'li',
              text: '完整文档'
            },
            {
              type: 'li',
              text: '查看历史更新'
            },
            {
              type: 'li',
              text: 'Bug 反馈'
            },
            {
              type: 'li',
              text: '许可协议 MIT'
            }
          ]
        }
      ]
    }
  }
}
</script>

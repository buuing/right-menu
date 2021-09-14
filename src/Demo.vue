<template>
  <div v-menu="options" style="height: 50vh; background-color: #ccc">
    <p v-menu="[{ type: 'li', text: '这是一个p标签' }]">这是一个p标签</p>
    <div v-menu="[{ type: 'li', text: '这是一个div标签' }]">这是一个div标签</div>
    <span>span</span>
    <input type="text" v-menu="[{ type: 'li', text: '这是一个input输入框' }]">
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          type: 'li',
          text: '查看网页源代码',
          disabled: true
        },
        {
          type: 'li',
          text: '检查',
          disabled: true
        }
      ]
    }
  }
}
</script>

<template>
  <div v-menu="options" style="height: 50vh; background-color: #ccc">
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          type: 'li',
          text: '查看网页源代码'
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

import Vue from 'vue'
import App from './Demo.vue'
import rightMenu from './index.js'

Vue.config.productionTip = false
Vue.use(rightMenu, (event, options) => {
  return [
    {
      type: 'li',
      text: '在新标签页中打开链接',
      callback: () => console.log('在新标签页中打开链接')
    },
    {
      type: 'li',
      text: '在新窗口中打开链接',
      callback: () => console.log('在新窗口中打开链接')
    },
    {
      type: 'li',
      text: '在隐身窗口中打开链接',
      disabled: true
    },
    { type: 'hr' },
    {
      type: 'li',
      text: '链接存储为',
      disabled: true
    },
    {
      type: 'li',
      text: '复制链接地址',
      disabled: true
    },
    { type: 'hr' },
    {
      type: 'li',
      text: '复制',
      disabled: true
    },
    {
      type: 'ul',
      text: '排序方式',
      children: [
        {
          type: 'li',
          text: '名称'
        },
        {
          type: 'li',
          text: '时间',
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '标签',
          disabled: true
        }
      ]
    },
    { type: 'hr' },
    {
      type: 'li',
      text: '显示网页源代码',
      disabled: true
    },
    {
      type: 'li',
      text: '检查',
      disabled: true
    },
    { type: 'hr' },
    ...options
  ]
})

new Vue({
  render: h => h(App)
}).$mount('#app')

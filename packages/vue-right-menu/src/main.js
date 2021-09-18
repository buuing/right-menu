import Vue from 'vue'
import App from './Demo.vue'
import init from 'right-menu-core'
import { name, version } from '../package.json'

const install = (Vue, options) => {
  Vue.directive('menu', {
    bind: (el, binding, vnode) => init(el, binding, options),
    beforeMounted: (el, binding, vnode) => init(el, binding, options)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const sleep = (wait) => new Promise(resolve => setTimeout(resolve, wait))
sleep()
Vue.config.productionTip = false
Vue.use(install, async (event, options) => {
  await sleep(50)
  return [
    ...options,
    { type: 'hr' },
    {
      type: 'ul',
      text: '一级',
      children: [
        {
          type: 'ul',
          text: '二级',
          children: [
            {
              type: 'li',
              text: '三级'
            }
          ]
        }
      ]
    },
    { type: 'hr' },
    {
      type: 'ul',
      text: `关于 ${name}`,
      children: [
        {
          type: 'li',
          text: `version ${version}`,
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: 'Github 仓库',
          callback: async () => window.open('https://github.com/buuing/vue-right-menu')
        },
        {
          type: 'li',
          text: 'Bug 反馈',
          callback: () => window.open('https://github.com/buuing/vue-right-menu/issues/new')
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '入门教程',
          disabled: true
        },
        {
          type: 'li',
          text: '高级配置',
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '查看历史更新',
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '📋 开源协议 License MIT',
          callback: () => window.open('https://github.com/buuing/vue-right-menu/blob/master/LICENSE')
        }
      ]
    }
  ]
})

new Vue({
  render: h => h(App)
}).$mount('#app')

import utils from './utils'

const install = (Vue, options) => {
  Vue.directive('menu', {
    // 钩子函数, 第一次绑定时触发
    bind (el, binding, vnode) {
      // 注册鼠标右击事件
      el.addEventListener('contextmenu', e => {
        // 阻止默认事件和冒泡
        utils.preventDefault(e)
        // 初始化遮罩层
        utils.initMask(el)
        // 初始化菜单栏
        utils.initMenu(binding.value, el, e)
      })
      // console.log({el, binding, vnode})
    },
    // 钩子函数, 解绑时触发
    unbind (el) {
      // console.log('解绑了?')
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

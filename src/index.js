import utils from './utils'

const install = (Vue, options) => {
  Vue.directive('menu', {
    bind (el, binding, vnode) {
      // 注册鼠标右击事件
      el.addEventListener('contextmenu', e => {
        // 阻止默认事件和冒泡
        utils.preventDefault(e)
        // 初始化遮罩层
        // utils.initMask(el)
        // 初始化菜单栏
        utils.initMenu(binding.value, el, e)
      })
    }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

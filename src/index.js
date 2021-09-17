import { preventDefault, initMenu } from './utils'
import { isWin } from './utils/system'
import './theme/index.less'

if (isWin) {
  require('./theme/theme-win10.less')
} else {
  require('./theme/theme-mac.less')
}

function init (el, binding, options) {
  // 注册鼠标右击事件
  el.addEventListener('contextmenu', e => {
    // 阻止默认事件和冒泡
    preventDefault(e)
    // 初始化菜单栏
    let res = []
    if (typeof options === 'function') {
      res = options(e, binding.value)
    } else {
      res = binding.value
    }
    initMenu(res, el, e)
  })
}

const install = (Vue, options) => {
  Vue.directive('menu', {
    bind: (el, binding, vnode) => init(el, binding, options),
    beforeMounted: (el, binding, vnode) => init(el, binding, options)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

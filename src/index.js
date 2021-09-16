import { preventDefault, initMenu } from './utils'
import './style/index.less'
import './style/theme-mac.less'

const isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows')
// const isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel')
if (isWin) {
  require('./style/theme-win10.less')
} else {
  require('./style/theme-mac.less')
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

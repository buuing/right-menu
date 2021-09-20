import { preventDefault, initMenu } from './utils'
import { getOperatSystem } from './utils/system'
import './theme/index.js'
import './theme/index.less'

// 添加的主题都按照theme-mac.less theme-win10.less theme-win8.less 的方式来命名
// [TODO:] 还有一些主题样式暂时缺失，所以这里 try catch 下
try {
  require('./theme/theme-' + getOperatSystem().toLowerCase().replace(/is/, '') + '.less')
} catch (e) {
  require('./theme/theme-mac.less')
}

// if (isWin) {
//   require('./theme/theme-win10.less')
// } else {
// ./theme/theme-mac.less
//   require('./theme/theme-mac.less')
// }

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

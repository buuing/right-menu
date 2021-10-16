import RightMenu from '@right-menu/core'

function getType (val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

function init (el, binding, param) {
  let options = []
  // let config = {}
  if (getType(param) === 'object') {
    // 高级配置先放一放, 再构思一下
    // config = param
  } else if (getType(param) === 'function') {
    options = param(binding.value)
  } else if (getType(param) === 'array') {
    options = param
  } else {
    throw new Error('未知的类型')
  }
  /* eslint-disable no-new */
  new RightMenu({
    el
  }, options)
}

const install = (Vue, param) => {
  Vue.directive('menu', {
    bind: (el, binding, vnode) => init(el, binding, param),
    beforeMounted: (el, binding, vnode) => init(el, binding, param)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

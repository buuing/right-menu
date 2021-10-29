import RightMenu from '@right-menu/core'

function getType (val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

function init (el, binding, arg1, arg2) {
  let config, options
  // 处理config
  if (getType(arg1) === 'object') {
    // 高级配置
    config = arg1
    options = arg2
  } else {
    config = {}
    options = arg1
  }
  // 处理options
  if (getType(options) === 'function') {
    // options 为函数
    options = options(binding.value)
  } else if (getType(options) === 'array') {
    // options 为数组
    options = options.slice()
  } else if (options === undefined) {
    // Vue.use 的时候没有传参数
    options = binding.value
  } else {
    throw new Error('未知的类型')
  }
  /* eslint-disable no-new */
  new RightMenu({
    ...config,
    el
  }, options)
}

const install = (Vue, arg1, arg2) => {
  Vue.directive('menu', {
    bind: (el, binding, vnode) => init(el, binding, arg1, arg2),
    beforeMounted: (el, binding, vnode) => init(el, binding, arg1, arg2)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

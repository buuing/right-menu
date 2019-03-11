export default {
  // use的时候会触发install
  install (Vue, options) {
    /**
     * vue自定义指令 https://cn.vuejs.org/v2/guide/custom-directive.html
     */
    Vue.directive("menu", {
      // 钩子函数, 第一次绑定时触发
      bind (el, binding, vnode) {
        console.log(el, binding, vnode)
      },
      // 钩子函数, 解绑时触发
      unbind (el) {
        alert('解绑了?')
      }
    })
  }
}

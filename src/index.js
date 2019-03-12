import utils from './utils'

export default {
  // use时执行
  install (Vue, options) {
    Vue.directive("menu", {
      // 钩子函数, 第一次绑定时触发
      bind (el, binding, vnode) {
        // 注册鼠标右击事件
        console.log({el, binding, vnode})
        el.addEventListener("contextmenu", e => {
          // 阻止默认事件和冒泡
          utils.preventDefault(e)
          // 初始化遮罩层
          utils.initMask()

          // -----------------------
          const menu = utils.render(binding.value)
          console.log(e)
          menu.style.top = e.clientY + 'px'
          menu.style.left = e.clientX + 'px'

          document.body.appendChild(menu)

          // console.log(document.querySelectorAll('.ldq-menu'))
        })
      },
      // 钩子函数, 解绑时触发
      unbind (el) {
        alert('解绑了?')
      }
    })
  }
}

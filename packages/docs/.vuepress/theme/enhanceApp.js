import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { install } from '@icon-park/vue/es/all'
import pubsub from 'pubsub-js'
import Vuex from 'vuex'
import axios from 'axios'

export function interceptRouterError (router) {
  // 获取原型对象上的 push 函数
  const originalPush = router.__proto__.push
  // 修改原型对象中的 push 方法
  router.__proto__.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
  }
}

export function fixRouterError404 (router) {
  router.beforeEach((to, from, next) => {
    // 解决非ASCII文件名的路由, 防止 404
    const decodedPath = decodeURIComponent(to.path)
    if (decodedPath !== to.path) {
      next(Object.assign({}, to, {
        fullPath: decodeURIComponent(to.fullPath),
        path: decodedPath
      }))
    } else {
      next()
    }
  })
}

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(Vuex)
  Vue.use(ElementUI)
  Vue.prototype.$pubsub = pubsub
  interceptRouterError(router)
  fixRouterError404(router)
}

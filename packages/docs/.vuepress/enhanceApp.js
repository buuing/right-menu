import RightMenuConfig from './config/right-menu'

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.mixin({
    mounted() {
      const RightMenu = require('vue-right-menu')
      Vue.use(RightMenu, (...arg) => RightMenuConfig(...arg, router))
    },
  })
}

import Vue from 'vue'
import App from './Demo.vue'
import VueRightMenu from './index.js'
// import { name, version } from '../package.json'

Vue.config.productionTip = false

Vue.use(VueRightMenu, (options) => {
  console.log(options)
  return options
})

new Vue({
  render: h => h(App)
}).$mount('#app')

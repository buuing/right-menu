import Vue from 'vue'
import App from './Demo.vue'
import rightMenu from './index.js'

Vue.use(rightMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

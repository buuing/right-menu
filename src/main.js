import Vue from 'vue'
import App from './Demo.vue'
import RightMenu from './index.js'
import './index.css'

Vue.use(RightMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'
import rightMenu from '@/components/vue-right-menu'
import '@/components/vue-right-menu/src/index.css'

Vue.use(rightMenu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

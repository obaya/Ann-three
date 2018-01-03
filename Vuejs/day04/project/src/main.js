import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import Router from './router/index.js'

// Vue.use(ElementUI)

new Vue({
  el: '#app',
  router:Router,
  render: h => h(App)
})

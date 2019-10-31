import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
if (process.env.NODE_ENV !== 'production') require('./mock') // require是运行时加载，import是编译时加载

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

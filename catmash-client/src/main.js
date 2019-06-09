import Vue from 'vue'
import _ from 'lodash'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3333/api/v1'
Vue.prototype._ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

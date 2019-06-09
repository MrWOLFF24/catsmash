import Vue from 'vue'
import _ from 'lodash'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.headers.common['x-api-key'] = 'df8fffd8-6fd7-41ad-8512-f7c70c33c2a0'
axios.defaults.baseURL = 'http://localhost:3333/api/v1';
Vue.prototype._ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

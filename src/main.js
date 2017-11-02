import Vue from 'vue'

import router from '@/router'
import store from '@/store'

import App from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

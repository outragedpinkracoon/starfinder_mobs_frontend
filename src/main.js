import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    this.$store.dispatch('loadMonsters')
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})

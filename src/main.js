import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'

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

Vue.use(VueAnalytics, {
  id: 'UA-121192757-1'
})

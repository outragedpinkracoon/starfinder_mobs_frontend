import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import EncounterBuilder from '@/components/EncounterBuilder'
import ManageEncounter from '@/components/ManageEncounter'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EncounterBuilder',
      component: EncounterBuilder
    },
    {
      path: '/manage-encounter',
      name: 'ManageEncounter',
      component: ManageEncounter
    }
  ]
})

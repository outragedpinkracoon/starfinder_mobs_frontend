import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monsters: [
      { id: 1, name: 'Fred', exp: 150 },
      { id: 2, name: 'Flurb', exp: 50 }
    ],
    currentEncounter: [],
    currentEncounterExp: 0
  },
  mutations: {
    addMonster(state, monster) {
      state.currentEncounter.push(monster)
      state.currentEncounterExp += monster.exp
    },
    removeMonster(state, index) {
      const monster = state.currentEncounter[index]
      state.currentEncounter.splice(index, 1)
      state.currentEncounterExp -= monster.exp
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const currentEncounter = {
  state: {
    monsters: [],
    totalExp: 0
  },
  mutations: {
    addMonster(state, monster) {
      state.monsters.push(monster)
      state.totalExp += monster.exp
    },
    removeMonster(state, index) {
      const monster = state.monsters[index]
      state.monsters.splice(index, 1)
      state.totalExp -= monster.exp
    }
  }
}

const monsterCollection = {
  state: {
    monsters: [
      { id: 1, name: 'Fred', exp: 150 },
      { id: 2, name: 'Flurb', exp: 50 }
    ]
  }
}

const party = {
  state: {
    numberOfPlayers: 1,
    playerLevel: 1
  },
  mutations: {
    updatePlayers(state, total) {
      state.numberOfPlayers = total
    },
    updateLevels(state, level) {
      state.playerLevel = level
    }
  }
}

export default new Vuex.Store({
  modules: {
    currentEncounter: currentEncounter,
    monsterCollection: monsterCollection,
    party: party
  }
})

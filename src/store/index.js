import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const currentEncounter = {
  state: {
    monsters: [],
    totalExp: 0,
    difficulty: { id: 0, name: 'EASY' }
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
    },
    setDifficulty(state, partyLevel) {
      state.difficulty = calculateDifficulty(partyLevel)
    }
  },
  actions: {
    recalculateDifficulty: ({ commit, rootState }) => {
      commit('setDifficulty', rootState.party.level)
    }
  }
}

const calculateDifficulty = (partyLevel) => {
  let result = { id: -1, name: 'EASY' }
  switch (parseInt(partyLevel)) {
    case -1:
      result = { id: -1, name: 'EASY' }
      break
    case 0:
      result = { id: 0, name: 'AVERAGE' }
      break
    case 1:
      result = { id: 1, name: 'CHALLENGING' }
      break
    case 2:
      result = { id: 2, name: 'HARD' }
      break
    case 3:
      result = { id: 3, name: 'EPIC' }
      break
    default:
      result = { id: -1, name: 'EASY' }
  }
  console.log(partyLevel)
  return result
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
    level: 1
  },
  mutations: {
    updateLevel(state, level) {
      state.level = level
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

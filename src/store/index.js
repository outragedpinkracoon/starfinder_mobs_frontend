import Vue from 'vue'
import Vuex from 'vuex'
import calculateDifficulty from '@/lib/difficultyCalculator'
import filter from '@/lib/filterMonsters'
import axios from 'axios'

Vue.use(Vuex)

const currentEncounter = {
  state: {
    monsters: [],
    totalExp: 0,
    difficulty: { id: -1, name: 'TRIVIAL' }
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
      state.difficulty = calculateDifficulty({partyLevel: partyLevel, encounterExp: state.totalExp})
    }
  },
  actions: {
    recalculateDifficulty: ({ commit, rootState }) => {
      commit('setDifficulty', rootState.party.level)
    }
  }
}

const manageEncounter = {
  state: {
    monsters: []
  },
  mutations: {
    manageMonsters(state, monsters) {
      let id = 0
      const clonedMonsters = monsters.map(monster => {
        const newMonster = Object.assign({id: id, hpModifier: 1}, monster)
        id++
        return newMonster
      })
      state.monsters = clonedMonsters
    }
  },
  actions: {
    syncMonsters: ({commit, rootState}) => {
      commit('manageMonsters', rootState.currentEncounter.monsters)
    }
  }
}

const monsterCollection = {
  state: {
    monsters: [],
    allMonsters: [],
    filter: ''
  },
  mutations: {
    updateFilter(state, value) {
      state.filter = value
      state.monsters = filter(state.allMonsters, value)
    },
    setMonsters(state, value) {
      state.monsters = value
      state.allMonsters = value
    }
  },
  actions: {
    loadMonsters ({ commit }) {
      axios
        .get('http://localhost:5000/api/monsters')
        .then(r => r.data)
        .then(result => {
          commit('setMonsters', result)
        })
    }
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
    party: party,
    manageEncounter: manageEncounter
  }
})

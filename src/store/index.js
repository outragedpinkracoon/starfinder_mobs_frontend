import Vue from 'vue'
import Vuex from 'vuex'
import calculateDifficulty from '@/lib/difficultyCalculator'
import filter from '@/lib/filterMonsters'
import monsters from '@/data/monsters'

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

const monsterCollection = {
  state: {
    monsters: monsters,
    allMonsters: monsters,
    filter: ''
  },
  mutations: {
    updateFilter(state, value) {
      state.filter = value
      state.monsters = filter(state.allMonsters, value)
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
    party: party
  }
})

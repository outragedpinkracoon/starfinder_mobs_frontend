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

const sortMonsters = (monsters) => {
  return monsters.sort((m1, m2) => {
    return m1.exp - m2.exp
  })
}

const monsterCollection = {
  state: {
    monsters: sortMonsters(monsters),
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
    party: party,
    manageEncounter: manageEncounter
  }
})

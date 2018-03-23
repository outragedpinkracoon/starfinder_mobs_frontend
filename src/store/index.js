import Vue from 'vue'
import Vuex from 'vuex'
import calculateDifficulty from '@/lib/difficultyCalculator'

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
    monsters: [
      {
        id: 2,
        name: 'Aeon Guard',
        cr: 3,
        exp: 800,
        type: 'Humanoid'
      },
      {
        id: 3,
        name: 'Aeon Guard Specialist',
        cr: 7,
        exp: 3200,
        type: 'Humanoid'
      },
      {
        id: 4,
        name: 'AHAV',
        cr: 12,
        exp: 19200,
        type: 'Construct'
      },
      {
        id: 5,
        name: 'Anacite Laborer',
        cr: 7,
        exp: 3200,
        type: 'Construct'
      },
      {
        id: 6,
        name: 'Anacite Wingbot',
        cr: 0.5,
        exp: 200,
        type: 'Construct'
      },
      {
        id: 7,
        name: 'Barachius Angel',
        cr: 7,
        exp: 3200,
        type: 'Outsider'
      },
      {
        id: 8,
        name: 'Apari',
        cr: 7,
        exp: 3200,
        type: 'Vermin'
      },
      {
        id: 9,
        name: 'Apari Constituent',
        cr: 2,
        exp: 600,
        type: 'Vermin'
      },
      {
        id: 10,
        name: 'Assembly Ooze',
        cr: 1,
        exp: 400,
        type: 'Ooze'
      },
      {
        id: 11,
        name: 'Asteray',
        cr: 12,
        exp: 19200,
        type: 'Fey'
      },
      {
        id: 12,
        name: 'Early Stage Barathu',
        cr: 2,
        exp: 600,
        type: 'Aberration'
      },
      {
        id: 13,
        name: 'Barathu',
        cr: 5,
        exp: 1600,
        type: 'Aberration'
      },
      {
        id: 14,
        name: 'Bloodbrother',
        cr: 7,
        exp: 3200,
        type: 'Magical Beast'
      },
      {
        id: 15,
        name: 'Bryrvath',
        cr: 15,
        exp: 51200,
        type: 'Aberration'
      },
      {
        id: 16,
        name: 'Caypin',
        cr: 6,
        exp: 2400,
        type: 'Magical Beast'
      },
      {
        id: 17,
        name: 'Contemplative',
        cr: 2,
        exp: 600,
        type: 'Monstrous Humanoid'
      },
      {
        id: 18,
        name: 'Contemplative Mentor',
        cr: 18,
        exp: 153600,
        type: 'Monstrous Humanoid'
      },
      {
        id: 19,
        name: 'crest-Eater',
        cr: 4,
        exp: 1200,
        type: 'Magical Beast'
      },
      {
        id: 20,
        name: 'Deh-Nolo',
        cr: 14,
        exp: 38400,
        type: 'Aberration'
      },
      {
        id: 21,
        name: 'Endbringer Devil (Dhalochar)',
        cr: 19,
        exp: 204800,
        type: 'Outsider'
      },
      {
        id: 22,
        name: 'Draelik',
        cr: 2,
        exp: 600,
        type: 'Humanoid'
      },
      {
        id: 23,
        name: 'Young Adult Blue Dragon',
        cr: 11,
        exp: 12800,
        type: 'Dragon'
      },
      {
        id: 24,
        name: 'Dragonkin',
        cr: 9,
        exp: 6400,
        type: 'Dragon'
      },
      {
        id: 25,
        name: 'Drow Enforcer',
        cr: 1,
        exp: 400,
        type: 'Humanoid'
      },
      {
        id: 26,
        name: 'Drow Noble Arms Dealer',
        cr: 11,
        exp: 12800,
        type: 'Humanoid'
      },
      {
        id: 27,
        name: 'Electrovore',
        cr: 2,
        exp: 600,
        type: 'Magical Beast'
      },
      {
        id: 28,
        name: 'Ellicoth',
        cr: 9,
        exp: 6400,
        type: 'Magical Beast'
      },
      {
        id: 29,
        name: 'Formian Worker',
        cr: 0.5,
        exp: 200,
        type: 'Monstrous Humanoid'
      },
      {
        id: 30,
        name: 'Formian Warrior',
        cr: 3,
        exp: 800,
        type: 'Monstrous Humanoid'
      },
      {
        id: 31,
        name: 'Frujai Colony',
        cr: 19,
        exp: 204800,
        type: 'Plant'
      },
      {
        id: 32,
        name: 'Frujai Soldier',
        cr: 12,
        exp: 19200,
        type: 'Plant'
      },
      {
        id: 33,
        name: 'Space Goblin Zaperator',
        cr: 0.33,
        exp: 135,
        type: 'Humanoid'
      },
      {
        id: 34,
        name: 'Space Goblin Honchohead',
        cr: 2,
        exp: 600,
        type: 'Humanoid'
      },
      {
        id: 35,
        name: 'Space Goblin Monarch',
        cr: 20,
        exp: 307200,
        type: 'Humanoid'
      },
      {
        id: 36,
        name: 'Gray',
        cr: 4,
        exp: 1200,
        type: 'Humanoid'
      },
      {
        id: 37,
        name: 'Haan',
        cr: 3,
        exp: 800,
        type: 'Monstrous Humanoid'
      },
      {
        id: 38,
        name: 'Haan Combat Pilot',
        cr: 7,
        exp: 3200,
        type: 'Monstrous Humanoid'
      },
      {
        id: 39,
        name: 'Hallajin',
        cr: 17,
        exp: 102400,
        type: 'Aberration'
      },
      {
        id: 40,
        name: 'Hesper',
        cr: 2,
        exp: 600,
        type: 'Fey'
      },
      {
        id: 41,
        name: 'Ikeshti Brood-Minder',
        cr: 2,
        exp: 600,
        type: 'Humanoid'
      },
      {
        id: 42,
        name: 'Ikeshti Rivener',
        cr: 5,
        exp: 1600,
        type: 'Humanoid'
      },
      {
        id: 43,
        name: 'Anhamut Inevitable',
        cr: 10,
        exp: 9600,
        type: 'Outsider'
      },
      {
        id: 44,
        name: 'Kalo Sharkhunter',
        cr: 2,
        exp: 600,
        type: 'Monstrous Humanoid'
      },
      {
        id: 45,
        name: 'Kalo Deepspeaker',
        cr: 5,
        exp: 1600,
        type: 'Monstrous Humanoid'
      },
      {
        id: 46,
        name: 'Ksarik',
        cr: 4,
        exp: 1200,
        type: 'Plant'
      },
      {
        id: 47,
        name: 'Kyokor',
        cr: 20,
        exp: 307200,
        type: 'Magical Beast'
      },
      {
        id: 48,
        name: 'Maraquoi Hunter',
        cr: 0.5,
        exp: 200,
        type: 'Humanoid'
      },
      {
        id: 49,
        name: 'Maraquoi Shaman',
        cr: 8,
        exp: 4800,
        type: 'Humanoid'
      },
      {
        id: 50,
        name: 'Marooned One',
        cr: 8,
        exp: 4800,
        type: 'Undead'
      },
      {
        id: 51,
        name: 'Mountain Eel',
        cr: 6,
        exp: 2400,
        type: 'Animal'
      },
      {
        id: 52,
        name: 'Necrovite',
        cr: 13,
        exp: 25600,
        type: 'Undead'
      },
      {
        id: 53,
        name: 'Nihili',
        cr: 5,
        exp: 1600,
        type: 'Undead'
      },
      {
        id: 54,
        name: 'Nihili Captain',
        cr: 13,
        exp: 25600,
        type: 'Undead'
      },
      {
        id: 55,
        name: 'Nuar Enforcer',
        cr: 4,
        exp: 1200,
        type: 'Monstrous Humanoid'
      },
      {
        id: 56,
        name: 'Nuar Specialist',
        cr: 8,
        exp: 4800,
        type: 'Monstrous Humanoid'
      },
      {
        id: 57,
        name: 'Oma',
        cr: 16,
        exp: 76800,
        type: 'Magical Beast'
      },
      {
        id: 58,
        name: 'Orocoran',
        cr: 6,
        exp: 2400,
        type: 'Aberration'
      },
      {
        id: 59,
        name: 'Orocoran Ichor Lord',
        cr: 9,
        exp: 6400,
        type: 'Aberration'
      },
      {
        id: 60,
        name: 'Reptoid',
        cr: 1,
        exp: 400,
        type: 'Humanoid'
      },
      {
        id: 61,
        name: 'Reptoid Master',
        cr: 6,
        exp: 2400,
        type: 'Humanoid'
      },
      {
        id: 62,
        name: 'Observer-Class Security Robot',
        cr: 1,
        exp: 400,
        type: 'Construct'
      },
      {
        id: 63,
        name: 'Patrol-Class Security Robot',
        cr: 4,
        exp: 1200,
        type: 'Construct'
      },
      {
        id: 64,
        name: 'Ryphorian Technician',
        cr: 1,
        exp: 400,
        type: 'Humanoid'
      },
      {
        id: 65,
        name: 'Ryphorian Pilot',
        cr: 5,
        exp: 1600,
        type: 'Humanoid'
      },
      {
        id: 66,
        name: 'Sarcesian Sniper',
        cr: 5,
        exp: 1600,
        type: 'Humanoid'
      },
      {
        id: 67,
        name: 'Sarcesian Cybercommando',
        cr: 8,
        exp: 4800,
        type: 'Humanoid'
      },
      {
        id: 68,
        name: 'Scavenger Slime',
        cr: 9,
        exp: 6400,
        type: 'Ooze'
      },
      {
        id: 69,
        name: 'Sharpwing',
        cr: 8,
        exp: 4800,
        type: 'Animal'
      },
      {
        id: 70,
        name: 'Shobhad',
        cr: 4,
        exp: 1200,
        type: 'Monstrous Humanoid'
      },
      {
        id: 71,
        name: 'Shobhad Warleader',
        cr: 7,
        exp: 3200,
        type: 'Monstrous Humanoid'
      },
      {
        id: 72,
        name: 'Skittermander Whelp',
        cr: 0.33,
        exp: 135,
        type: 'Humanoid'
      },
      {
        id: 73,
        name: 'Skittermander',
        cr: 2,
        exp: 600,
        type: 'Humanoid'
      },
      {
        id: 74,
        name: 'Surnoch',
        cr: 9,
        exp: 6400,
        type: 'Animal'
      },
      {
        id: 75,
        name: 'Symbiend',
        cr: 0.33,
        exp: 135,
        type: 'Aberration'
      },
      {
        id: 76,
        name: 'Damaritosh\'s Arm Host',
        cr: 6,
        exp: 2400,
        type: 'Humanoid'
      },
      {
        id: 77,
        name: 'Swarm Corrovox',
        cr: 3,
        exp: 800,
        type: 'Monstrous Humanoid'
      },
      {
        id: 78,
        name: 'Swarm Thresher Lord',
        cr: 10,
        exp: 9600,
        type: 'Monstrous Humanoid'
      },
      {
        id: 79,
        name: 'Skeletal Undead',
        cr: 0.5,
        exp: 200,
        type: 'Undead'
      },
      {
        id: 80,
        name: 'Occult Zombie',
        cr: 1,
        exp: 400,
        type: 'Undead'
      },
      {
        id: 81,
        name: 'Cybernetic Zombie',
        cr: 3,
        exp: 800,
        type: 'Undead'
      },
      {
        id: 82,
        name: 'Urog',
        cr: 3,
        exp: 800,
        type: 'Magical Beast'
      },
      {
        id: 83,
        name: 'Verthani Aether Pilot',
        cr: 2,
        exp: 600,
        type: 'Humanoid'
      },
      {
        id: 84,
        name: 'Verthani Pure One',
        cr: 9,
        exp: 6400,
        type: 'Humanoid'
      },
      {
        id: 85,
        name: 'Void Hag',
        cr: 10,
        exp: 9600,
        type: 'Monstrous Humanoid'
      },
      {
        id: 86,
        name: 'Witchwyrd',
        cr: 6,
        exp: 2400,
        type: 'Monstrous Humanoid'
      },
      {
        id: 87,
        name: 'Wrikreechee',
        cr: 3,
        exp: 800,
        type: 'Monstrous Humanoid'
      }
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

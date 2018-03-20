<template>
  <div class='bordered'>
    <h1>Current Encounter</h1>
    <p>Total Exp: {{ totalExp }}</p>
    <p>Difficulty: {{ difficulty }}</p>
    <ul>
      <li :key='index' v-for="(monster, index) in monsters">
        {{ monster.name }}
        {{ monster.exp }}
        <button @click="remove(index)">[x]</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'CurrentEncounter',
  computed: {
    monsters: () => store.state.currentEncounter.monsters,
    totalExp: () => store.state.currentEncounter.totalExp,
    difficulty: () => store.state.currentEncounter.difficulty.name
  },
  methods: {
    remove(monster) {
      store.commit('removeMonster', monster)
    }
  }
}
</script>

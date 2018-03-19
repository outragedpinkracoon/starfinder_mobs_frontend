<template>
  <div class='container'>
    <h1>Current Encounter</h1>
    <p>Total Exp: {{ currentEncounterExp }}</p>
    <ul>
      <li :key="monster.id" v-for="(monster, index) in currentEncounter">
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
    currentEncounter: () => store.state.currentEncounter,
    currentEncounterExp: () => store.state.currentEncounterExp
  },
  methods: {
    remove(monster) {
      store.commit('removeMonster', monster)
    }
  }
}
</script>

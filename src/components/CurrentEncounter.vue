<template>
  <div class='flex-container'>
    <h1>Current Encounter</h1>
    <table id='stats' class='flex-item'>
      <tr>
        <td>Total Exp:</td>
        <td>{{ totalExp }}</td>
      </tr>
      <tr>
        <td>Difficulty:</td>
        <td>{{ difficulty }}</td>
      </tr>
    </table>

    <table class='monster-list flex-item'>
      <thead>
        <th>Name</th>
        <th>Exp</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
      <tr :key="monster.id" v-for="(monster, index) in monsters">
        <td>{{ monster.name }}</td>
        <td>{{ monster.exp }}</td>
        <button @click="remove(index)">[x]</button>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'CurrentEncounter',
  computed: {
    monsters: () => store.state.currentEncounter.monsters,
    totalExp: () => store.state.currentEncounter.totalExp,
    difficulty: () => store.state.currentEncounter.difficulty.name,
    haveMonters: () => monsters.length > 0
  },
  methods: {
    remove(monster) {
      store.commit('removeMonster', monster)
      store.dispatch('recalculateDifficulty')
    }
  }
}
</script>

<style lang='scss' scoped>
.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 40px;
}

@media only screen and (max-width: 900px) {
  .flex-container {
    padding-left: 0px;
  }
}

#stats {
  padding-bottom: 10px;

  li {
    padding-bottom: 10px;
  }
}
</style>

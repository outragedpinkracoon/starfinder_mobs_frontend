<template>
  <div class='flex-container'>
    <h2>Current Encounter</h2>
    <table id='stats' class='flex-item'>
      <tr>
        <th>Total Exp</th>
        <th>Difficulty</th>
      </tr>
      <tr>
        <td>{{ totalExp }}</td>
        <td>{{ difficulty }}</td>
      </tr>
    </table>

    <template v-if="haveMonsters">
    <table class='monster-list flex-item'>
      <thead>
        <th>Name</th>
        <th>Exp</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
      <tr :key="index" v-for="(monster, index) in monsters">
        <td>{{ monster.name }}</td>
        <td>{{ monster.exp.toLocaleString() }}</td>
        <td><button @click="remove(index)">-</button></td>
      </tr>
      </tbody>
    </table>
    </template>
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
    haveMonsters: () => store.state.currentEncounter.monsters.length > 0
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

$cream: RGB(245,240,234);
$light_blue: RGB(193,207,208);
$dark_blue: RGB(40,44,52);

.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 40px 0px 40px;
}

@media only screen and (max-width: 900px) {
  .flex-container {
    padding: 0px;
  }
}

#stats {
  padding-bottom: 46px;

  th {
    background-color: $cream;
    color: $dark_blue;
    text-align: center;
  }

  td {
    text-align: center;
  }

  th:first-child, td:first-child {
    text-align: left;
  }

  td:first-child {
    border-right: 1px solid $dark_blue;
  }

  tr {
    background-color: $light_blue;
  }

  li {
    padding-bottom: 10px;
  }
}
</style>

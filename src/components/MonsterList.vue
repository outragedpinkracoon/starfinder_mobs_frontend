<template>
  <div id='monster-list'>
    <h2>Select Monsters</h2>
    <table align='center' class='monster-list'>
      <thead>
        <th>Name</th>
        <th>Exp</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
      <tr :key="monster.id" v-for="monster in monsters">
        <td>{{ monster.name }}</td>
        <td>{{ monster.exp }}</td>
        <button @click="add(monster)">add</button>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'MonsterList',
  computed: { monsters: () => store.state.monsterCollection.monsters },
  methods: {
    add(monster) {
      store.commit('addMonster', monster)
      store.dispatch('recalculateDifficulty')
    }
  }
}
</script>

<style scoped>
#monster-list {
  padding-right: 40px;
}

@media only screen and (max-width: 900px) {
  #monster-list {
    padding-right: 0px;
  }
}
</style>

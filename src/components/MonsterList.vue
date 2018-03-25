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
        <td>{{ monster.exp.toLocaleString() }}</td>
        <td><button @click="add(monster)">+</button></td>
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

<style lang='scss' scoped>
$cream: RGB(245,240,234);

#monster-list {
  padding: 0px 40px 0px 40px;
}

@media only screen and (max-width: 900px) {
  #monster-list {
    padding: 0px;
  }
}
</style>

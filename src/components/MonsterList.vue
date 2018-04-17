<template>
  <div id='monster-list'>
    <h2>Select Monsters</h2>
    <div>
      <p id='filter'>Filter:</p>
      <input v-model="filter"/>
    </div>
    <table align='center' class='monster-list'>
      <thead>
        <th>Name</th>
        <th>Exp</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
      <tr :key="index" v-for="(monster, index) in monsters">
        <td>{{ monster.name }}</td>
        <td v-if='monster.exp'>{{ monster.exp.toLocaleString() }}</td>
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
  computed: {
    monsters: () => store.state.monsterCollection.monsters,
    filter: {
      get () {
        return store.state.monsterCollection.filter
      },
      set (value) {
        store.commit('updateFilter', value)
      }
    }
  },
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
$dark_blue: RGB(40,44,52);

#monster-list {
  padding: 0px 40px 0px 40px;
}

@media only screen and (max-width: 900px) {
  #monster-list {
    padding: 0px;
  }
}

p {
  text-transform: uppercase;
  margin: 5px;
}

input {
  padding: 10px;
  margin: 5px 0px 10px 0px;
  border-radius: 0.5em;
  border: 1.5px solid $dark_blue;
  font-size: 1rem;
  width: 94%;
  background-color: RGB(255,250,244);
}
</style>

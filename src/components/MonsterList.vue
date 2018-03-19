<template>
  <div class='container'>
    <h1>Select Monsters</h1>
    <ul>
      <li :key="monster.id" v-for="monster in monsters">
        {{ monster.name }}
        {{ monster.exp }}
        <button @click="add(monster)">add</button>
      </li>
    </ul>
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
    }
  }
}
</script>

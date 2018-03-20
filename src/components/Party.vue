<template>
  <div>
    <div>
      <input v-model="numberOfPlayers"/>
      <input v-model="level"/>
    </div>
    <p>{{ numberOfPlayers }}</p>
    <p>{{ level }}</p>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Party',
  computed: {
    numberOfPlayers: {
      get () {
        return store.state.party.numberOfPlayers
      },
      set (value) {
        store.commit('updatePlayers', value)
      }
    },
    level: {
      get () {
        return store.state.party.level
      },
      set (value) {
        store.commit('updateLevel', value)
      }
    }
  }
}
</script>

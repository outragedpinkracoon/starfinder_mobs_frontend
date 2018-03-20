<template>
  <div>
    <input v-model="numberOfPlayers"/>
    <p>{{ numberOfPlayers }}</p>
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
    }
  }
}
</script>

<template>
  <div class='container'>
    <p>Players {{ totalPlayers }}</p>
    <p>Level {{ playerLevel }}</p>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Party',
  computed: {
    totalPlayers: () => store.state.party.totalPlayers,
    playerLevel: () => store.state.party.playerLevel
  },
  methods: {
    updatePlayers(total) {
      store.commit('updatePlayers', total)
    },
    updateLevel(level) {
      store.commit('updateLevel', level)
    }
  }
}
</script>

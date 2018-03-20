<template>
  <div>
    <div>
      <p>Number of players
        <input v-model="numberOfPlayers"/>
        ({{ numberOfPlayers }})
      </p>
      <p>
        Party Level
        <input v-model="level"/>
        ({{ level }})
      </p>
    </div>
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

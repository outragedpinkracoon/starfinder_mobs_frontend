<template>
  <div>
    <div>
      <p>
        Party Level
        <input v-model="level"/>
      </p>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Party',
  computed: {
    level: {
      get () {
        return store.state.party.level
      },
      set (value) {
        store.commit('updateLevel', value)
        store.dispatch('recalculateDifficulty')
      }
    }
  }
}
</script>

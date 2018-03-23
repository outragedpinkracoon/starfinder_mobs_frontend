<template>
  <div id='party'>
    <p>
      Party Level
      <input v-model="level"/>
    </p>
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

<style scoped>
#party {
  text-align: center;
}
</style>

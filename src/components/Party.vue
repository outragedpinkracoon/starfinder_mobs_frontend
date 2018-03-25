<template>
  <div id='party'>
    <div class='flex-container'>
      <p>Party Level
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

<style lang='scss' scoped>

$dark_blue: RGB(40,44,52);

.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

p {
  text-transform: uppercase;
}

input {
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 0.5em;
  border: 1.5px solid $dark_blue;
  font-size: 1rem;
  width: 25px;
  background-color: RGB(255,250,244);
}
</style>

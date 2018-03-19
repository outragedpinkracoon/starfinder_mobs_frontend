<template>
  <div class='container'>
    <h1>Select Monsters</h1>
    <ul id="example-1">
    <li :key="monster.id" v-for="monster in monsters">
      {{ monster.name }}
      {{ monster.exp }}
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MonsterList',
  data () {
    return {
      monsters: [
        { id: 1, name: 'Fred', exp: 100 },
        { id: 2, name: 'Flurb', exp: 50 }
      ]
    }
  }
}
</script>

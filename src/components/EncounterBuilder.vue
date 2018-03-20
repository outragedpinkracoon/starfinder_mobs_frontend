<template>
  <div class='bordered'>
    <h1>Encounter Builder</h1>
    <Party></Party>
    <div id='encounter-builder'>
      <CurrentEncounter></CurrentEncounter>
      <MonsterList></MonsterList>
    </div>
  </div>
</template>

<script>
import MonsterList from '@/components/MonsterList'
import CurrentEncounter from '@/components/CurrentEncounter'
import Party from '@/components/Party'

export default {
  name: 'EncounterBuilder',
  components: {
    Party,
    MonsterList,
    CurrentEncounter
  }
}
</script>

<style>
.bordered {
  border: 1px solid red;
}

h1 {
  text-align: center
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
</style>

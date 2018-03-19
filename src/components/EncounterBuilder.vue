<template>
  <div>
    <h1>Encounter Builder</h1>
    <Party></Party>
    <div id='encounter-builder'>
      <MonsterList></MonsterList>
      <CurrentEncounter></CurrentEncounter>
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
#encounter-builder {
  border: 1px solid red;
  display: flex;
  flex-flow: row;
}

#encounter-builder .container {
  flex: 1;
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

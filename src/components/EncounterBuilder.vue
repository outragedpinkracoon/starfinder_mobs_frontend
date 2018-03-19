<template>
  <div>
    <h1>Encounter Builder</h1>
    <div id='encounter-builder'>
      <MonsterList></MonsterList>
      <CurrentEncounter></CurrentEncounter>
    </div>
  </div>
</template>

<script>
import MonsterList from '@/components/MonsterList'
import CurrentEncounter from '@/components/CurrentEncounter'

export default {
  name: 'EncounterBuilder',
  components: {
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

#encounter-builder .container h1 {
  text-align: center
}

#encounter-builder .container ul {
  list-style: none;
}
</style>

<template>
  <div id='encounter-builder'>
    <h1>Encounter Builder</h1>
    <Party></Party>
    <div class='flex-wrapper'>
      <div class='flex-container'>
        <MonsterList class='flex-item'></MonsterList>
        <CurrentEncounter class='flex-item'></CurrentEncounter>
      </div>
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

<style scoped>
.flex-wrapper {
  display: flex;
  justify-content: center;
}
.flex-container {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 900px) {
  .flex-container {
    flex-direction: column-reverse;
  }
}
</style>

<style>
th, td {
  text-align: left;
  padding-bottom: 10px;
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

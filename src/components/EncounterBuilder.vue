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
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Permanent+Marker');

th, td {
  text-align: left;
  padding-bottom: 10px;
}

table, tr, td {
  border-spacing: 0;
}

th {
  border-bottom: 1px solid black;
  font-weight: bold;
  color: RGB(127, 143, 164)
}

p {
  color: RGB(127, 143, 164)
}

h1 {
  text-align: center;
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Permanent Marker', cursive;
  color: RGB(24, 24, 65)
}

body {
  font-family: 'Open Sans', sans-serif;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

</style>

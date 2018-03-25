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

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web|Permanent+Marker');

$dark_blue: RGB(40,44,52);
$light_blue: RGB(193,207,208);
$cream: RGB(245,240,234);
$brown: RGB(71,62,54);
$purple: RGB(63,51,78);

$table_padding: 12px;

th, td {
  text-align: left;
  padding-bottom: 10px;
}

td, th {
  padding: $table_padding;
}

table, tr, td {
  border-spacing: 0;
}

table {
  width: 100%;
}

td {
  border-right: 1px solid black;
}

td:last-child {
  border: none;
  text-align: center;
}

tr:nth-child(odd) {
  background-color: $light_blue;
}

tr:nth-child(even) {
  background-color: $cream;
}

th {
  background-color: $dark_blue;
  color: $cream;
  text-transform: uppercase;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin: 10px 0px;
}

h2 {
  font-size: 2rem;
  text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  color: RGB(24, 24, 65);
  text-transform: uppercase;
}

body {
  font-family: 'Titillium Web', sans-serif;
  background-color: $cream;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

button {
  padding: 10px 15px;
  text-align: center;
  border-radius: 0.5em;
  border: 1.5px solid $dark_blue;
  font-size: 1rem;
  background-color: RGB(255,250,244);
}

</style>

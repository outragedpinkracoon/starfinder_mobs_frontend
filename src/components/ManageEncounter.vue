<template>
  <div id='manage-encounter'>
    <div class='flex-container'>
      <h2>Manage Encounter</h2>
      <template v-if="haveMonsters">
      <table class='flex-item'>
        <thead>
          <th>Name</th>
          <th>Exp</th>
          <th>Health</th>
          <th>Apply Damage / Healing</th>
        </thead>
        <tbody>
        <tr :key="index" v-for="(monster, index) in monsters">
          <td>{{ monster.name }}</td>
          <td>{{ monster.exp.toLocaleString() }}</td>
          <td>
            {{ monster.health }}
            <span class='dead' v-if='monsterDead(monster)'>DEAD &#9760;</span>
          </td>
          <td>
            <button @click="addHealth(monster)">+</button>
              <input class='modify-health' v-model='monster.hpModifier' />
            <button @click="removeHealth(monster)">-</button>
          </td>
        </tr>
        </tbody>
      </table>
      </template>
    </div>
    <p class='button'>
      <router-link :to="'/'">back</router-link>
    </p>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'ManageEncounter',
  computed: {
    monsters: () => store.state.manageEncounter.monsters,
    haveMonsters: () => store.state.manageEncounter.monsters.length > 0
  },
  created: function () {
    store.dispatch('syncMonsters')
  },
  methods: {
    addHealth(monster) {
      monster.health += parseInt(monster.hpModifier)
    },
    removeHealth(monster) {
      monster.health -= parseInt(monster.hpModifier)
    },
    monsterDead(monster) {
      return monster.health <= 0
    }
  }
}
</script>

<style lang='scss' scoped>

$cream: RGB(245,240,234);
$light_blue: RGB(193,207,208);
$dark_blue: RGB(40,44,52);

#manage-encounter {
 padding: 0px 40px 0px 40px;
}

.flex-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
}

@media only screen and (max-width: 900px) {
  .flex-container {
    padding: 0px;
  }
}

input.modify-health {
  text-align: center;
  font-size: 0.9rem;
  width: 60px;
  padding: 8px;
}

.dead {
  margin-left: 10px;
  color: darkred;
}
</style>

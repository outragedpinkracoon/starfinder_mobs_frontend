<template>
  <div id="app">
    <router-view/>
    <div id='footer'>
      <p>This site contains Open Game Content from <a href='http://glasstopgames.com'>glasstopgames.com</a> used under the <a href='http://glasstopgames.com/open-game-license.html'>Open Game License (OGL)</a>
      </p>
      <p>Contribute to this on <a href='https://github.com/outragedpinkracoon/starfinder_mobs_frontend'> Github! </a></p>
      <p>API is also available for <a href='https://github.com/outragedpinkracoon/StarfinderMobsApi'>contributions</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#footer {
  text-align: center;
}
</style>

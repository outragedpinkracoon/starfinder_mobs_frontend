<template>
  <div id="app">
    <router-view/>
    <p id='footer'>This site contains Open Game Content from <a href='http://glasstopgames.com'>glasstopgames.com</a> used under the <a href='http://glasstopgames.com/open-game-license.html'>Open Game License (OGL)</a></p>
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

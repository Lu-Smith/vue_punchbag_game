<template>
  <div>
    <h2>Main Game</h2>
    <div id="bag"> bag image</div>
    <div id="bag-health">bag health</div>
    <div id="controls">
      <button>Punch</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  #bag {
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background: url(../images/punchbagMain.png) center no-repeat;
    background-size: 200%;
  }
</style>
<template>
  <div>
    <h2>Main Game</h2>
    <div id="bag"> bag image</div>
    <div id="bag-health">
      <div></div>
    </div>
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

  #bag-health {
    width: 200px;
    border: 2px solid #000;
    margin: 0 auto 20px auto;
  }

  #bag-health div {
    height: 20px;
    background: rgb(241, 10, 10);
  }

  #controls {
    width: 120px;
    margin: 0 auto;
  }

  #controls button {
    padding: 15px 20px;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    font-size: 18px;
  }


</style>
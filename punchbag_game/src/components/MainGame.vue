<template>
  <div>
    <div id="bag"></div>
    <div id="bag-health">
      <div></div>
    </div>
    <div id="controls">
      <button v-on:click="punch">Punch</button>
      <button v-on:click="restart">Restart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MyComponent {
  punch: () => void;
  restart: () => void;
}

const useMyComponent = () => {
  const health = ref(100);
  const ended = ref(false);

  const punch = () => {
    health.value -= 10;
    if (health.value <= 0) {
      ended.value = true
    }
  };

  const restart = () => {
    health.value = 100;
    ended.value = false;
  };

  return { health, punch, restart };
};

export default defineComponent({
  setup() {
    const { health, punch, restart } = useMyComponent();

    return { health, punch, restart };
  },
});
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
    margin-bottom: 20px;
  }


</style>
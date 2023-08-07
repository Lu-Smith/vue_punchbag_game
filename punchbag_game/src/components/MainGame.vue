<template>
  <div>
    <div id="bag" v-bind:class="{burst: ended}"></div>
    <span>{{ health }}%</span>
    <div id="bag-health">
        <div v-bind:style="{width:health + '%'}"></div> 
    </div>
    <div id="controls">
      <button v-on:click="punch" v-show="!ended">Punch</button>
      <button v-on:click="restart" v-show="ended">Restart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MyComponent {
  punch: () => void;
  restart: () => void;
  health: number;
  ended: boolean;
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

  return { health, ended, punch, restart };
};

export default defineComponent({
  setup() {
    const { health, ended, punch, restart} = useMyComponent();

    return { health, punch, restart, ended };
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

  #bag.burst {
    background: url(../images/punchbag2.png) center no-repeat;
    background-size: 120%;
  }

  span {
    color: rgb(241, 10, 10);
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }

  #bag-health {
    width: 200px;
    margin: 0 auto 20px auto;
    border: 2px solid #000;
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
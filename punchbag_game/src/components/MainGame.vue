<template>
  <div class="MainGame">
    <div id="bag" v-bind:class="{burst: ended, punch: activeBlood}"></div>
    <span>{{ health }}%</span>
    <div id="bag-health">
        <div v-bind:style="{width:health + '%'}"></div> 
    </div>
   
    <div id="controls">
      <div class="red-square box1" :class="{'activeBlood': activeBlood}"></div>
      <div class="red-square box2" :class="{'activeBlood': activeBlood}"></div>
      <div class="red-square box3" :class="{'activeBlood': activeBlood}"></div>
      <div class="red-square box4" :class="{'activeBlood': activeBlood }"></div>
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
  active: boolean;
}

const useMyComponent = () => {
  const health = ref(100);
  const ended = ref(false);
  const activeBlood = ref(false)

  const punch = () => {
    health.value -= 10;
    activeBlood.value = true;
    if (health.value <= 0) {
      ended.value = true;
      activeBlood.value = false;
    }
  };

  const restart = () => {
    health.value = 100;
    ended.value = false;
    activeBlood.value = false;
  };

  return { health, ended, punch, restart, activeBlood };
};

export default defineComponent({
  setup() {
    const { health, ended, punch, restart, activeBlood} = useMyComponent();

    return { health, punch, restart, ended, activeBlood };
  },
});
</script>


<style >
  @keyframes moveAnimation {
    0% { transform: translateX(0px); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(0px); }
  }

  @keyframes rotateAnimation {
    0% { transform: rotate(0); }
    20% { transform: rotate(-10deg); }
    40% { transform: rotate(10deg); }
    100% { transform: rotate(0); }
  }

  .MainGame {
    min-height: 100vh;
  }

  #bag {
    width: 200px;
    min-height: 500px;
    margin: 0 auto;
    background: url(../images/punchbagMain.png) center no-repeat;
    background-size: 200%;
   
  }

  #bag.punch {
    animation: rotateAnimation 5s infinite;
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
    padding: 13px 20px;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    font-size: 17px;
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }

  #controls button:hover {
    background: red;
  }

  .red-square {
    background: transparent;
    position: relative;
  }

  .activeBlood {
    background: red;
    animation: moveAnimation 2s infinite;
  }

  .red-square.box1 {
    width: 10px;
    height: 10px;
    top: 25px;
    left: -10px;
  }

  .red-square.box2 {
    width: 15px;
    height: 10px;
    top: 40px;
    left: 130px;
  }

  .red-square.box3 {
    width: 10px;
    height: 15px;
    top: 40px;
    left: -40px;
  }

  .red-square.box4 {
    width: 10px;
    height: 10px;
    top: 50px;
    left: 120px;
  }

  @media screen and (max-width: 800px) {
    #bag {
      width: 220px;
      min-height: 440px;
      background-size: 190%;
    }

    span {
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
    }

    #bag-health {
      width: 200px;
      margin: 0 auto;
      border: 1px solid #000;
    }

    #bag-health div {
      height: 15px;
    }

    #controls button {
      padding: 10px 25px;
      border-radius: 10px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      font-size: 15px;
    }
}
</style>
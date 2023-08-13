<template>
  <div :class="{'dark': darkMode}">
    <MainHeader @modeToggle="toggleDarkMode" :darkMode="darkMode" />
    <h1>Punching Game</h1>
    <MainGame />
    <MainFooter/>
  </div>
</template>

<script lang="ts" setup >
import { ref } from 'vue';
import MainGame from './components/MainGame.vue';
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue';

const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};
</script>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

h1 {
  animation: colorAnimation 2s infinite;
  margin-top: 10px;
}

#app .dark {
  background: rgb(15, 15, 15);
  color: white;
}

@keyframes colorAnimation {
    0% { color: purple }
    50% { color: rgb(12, 139, 50)}
    100% { color: rgb(212, 21, 21) }
}

</style>

<template>
  <div>
    <MainHeader />
    <h1>Punching Game</h1>
    <MainGame />
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainGame from './components/MainGame.vue';
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainGame,
    MainFooter,
    MainHeader
}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  animation: colorAnimation 2s infinite;
}

@keyframes colorAnimation {
    0% { color: purple }
    50% { color: rgb(79, 18, 177)}
    100% { color: rgb(212, 21, 212) }
}

</style>

<template>
  <div class="Header">
      <button class="darkButton" v-on:click="toggleModes">
          Dark 
          <span class="material-symbols-outlined" :class={DarkOnButton}>toggle_off</span>
      </button>
      <button class="lightButton" v-on:click="toggleModes">
          Light 
          <span class="material-symbols-outlined" :class={LightOnButton}>toggle_on</span>
      </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const LightOnButton = ref(true)
const DarkOnButton = ref(false)

const toggleModes = () => {
  LightOnButton.value = !LightOnButton.value
  DarkOnButton.value = !DarkOnButton.value
}

</script>

<style>
.Header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.DarkOnButton, .LightOnButton {
  color: green;
}

.Header button {
  padding: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 600;
  background: transparent;
  border: none;
}

.Header .material-symbols-outlined {
  font-size: 50px;
}


</style>
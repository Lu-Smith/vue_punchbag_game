<template>
  <div class="Header">
    <button class="darkButton" @click="emitDarkModeToggle(true)">
      Dark 
      <span class="material-symbols-outlined" :class="{ 'toggle_off': !darkMode }"></span>
    </button>
    <button class="lightButton" @click="emitDarkModeToggle(false)">
      Light 
      <span class="material-symbols-outlined" :class="{ 'toggle_on': darkMode }"></span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  darkMode: Boolean,
});

const emitDarkModeToggle = defineEmits(['modeToggle']);
</script>

<style>
.Header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.Header .darkMode {
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
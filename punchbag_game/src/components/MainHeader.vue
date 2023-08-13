<template>
  <div class="Header">
    <button class="darkButton" @click="$emit('modeToggle')" :class="{'darkMode': darkMode}">
      Dark 
      <span class="material-symbols-outlined" :class="{'darkMode': darkMode}" >toggle_off</span>
    </button>
    <button class="lightButton" @click="$emit('modeToggle')" :class="{'lightMode': darkMode}" >
      Light 
      <span class="material-symbols-outlined" :class="{'darkMode': !darkMode}">toggle_on</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
 import { defineProps } from 'vue';

defineProps({
  darkMode: {type: Boolean, required: true}
});


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

.Header .lightMode {
  color: rgb(241, 10, 10);
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

@media screen and (max-width: 800px) {
  .Header {
    gap: 5px;
  }

  .Header button {
    padding: 3px;
    font-size: 12px;
    gap: 3px;
  }

  .Header .material-symbols-outlined {
    font-size: 40px;
  }
}
</style>
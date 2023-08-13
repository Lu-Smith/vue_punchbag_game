<template>
  <div class="Header">
    <button class="darkButton" @click="$emit('modeToggle')">
      Dark 
      <span class="material-symbols-outlined" :class="{'darkMode': darkMode}" >toggle_off</span>
    </button>
    <button class="lightButton" @click="$emit('modeToggle')" >
      Light 
      <span class="material-symbols-outlined" :class="{'darkMode': !darkMode}">toggle_on</span>
    </button>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  darkMode: Boolean,
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
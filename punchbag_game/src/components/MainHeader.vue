<template>
  <div class="Header">
    <button class="darkButton">
      Dark 
      <span class="material-symbols-outlined">toggle_off</span>
    </button>
    <button class="lightButton">
      Light 
      <span class="material-symbols-outlined">toggle_on</span>
</button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.Header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.Header button {
  padding: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 600;
}


</style>
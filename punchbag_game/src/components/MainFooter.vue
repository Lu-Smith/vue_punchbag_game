<template>
  <div class="Footer">
    <h4>This game was coded by 
      <a class="profile-link" href="https://www.lunasmithart.com/" target="_blank">Luna Smith</a> 
      and is available as an open-source project on 
      <a class="gitHub-link" href="https://github.com/Lu-Smith/vue_punchbag_game" target="_blank">GitHub</a>.
    </h4>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.Footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  padding: 10px;
}

.Footer a {
  color: rgb(241, 88, 88);
  text-decoration: none;
  transition: all 200ms ease-in-out;
}

.Footer a:hover {
  color: rgb(24, 134, 52);
  position: relative;
  top: -3px;
}

@media screen and (max-width: 800px) {
  .Footer {
    font-size: 10px;
    padding: 15px;
  }
}
</style>
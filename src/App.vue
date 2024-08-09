<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
const loadedData = (data) => {
  console.log("获取到数据", data);
};
</script>

<template>
  <HelloWorld :age="11" msg="Vite + Vue" @loadedData="loadedData" />
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

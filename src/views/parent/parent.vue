<template>
<!-- project description is here-->
  <div>
    parent
    <childA @click="clickChild" childName="childA"/>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, computed } from 'vue';
import childA from './childA.vue'
const clickChild = () => {
  console.log('父页面')
}
</script>
<style scoped lang='scss'>
</style>
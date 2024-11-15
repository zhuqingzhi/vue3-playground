<template>
<!-- project description is here-->
  <div>child</div>
  <div>child2</div>
  <grandChildA v-bind="$attrs"/>
</template>
<script lang="ts">
export default {
}
</script>

<script setup lang='ts'>
import { ref, reactive, onMounted, computed, useAttrs } from 'vue';
import grandChildA from './grandChildA.vue'
const attrs=useAttrs()
onMounted(() => {
    console.log('attrs',attrs)
})

</script>
<style scoped lang='scss'>
</style>
<template>
  <div class="delete-dialog">确认删除？</div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style lang="scss" scoped>
.delete-dialog {
  width: 300px;
  height: 300px;
  background-color: #4b95e9;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

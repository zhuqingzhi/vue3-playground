<template>
  <div class="">
    {{ userInfo.name }}
  </div>
</template>
<script setup lang="ts">
type UserInfo = {
  name: string;
};
const userInfo: UserInfo = await getUser();
async function getUser(): Promise<UserInfo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "zs" });
    }, 1000);
  });
}
</script>
<style lang="scss" scoped></style>

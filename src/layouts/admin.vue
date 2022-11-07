<script setup lang="ts">
import MenuComponents from "./admin/menu.vue";
</script>
<template>
  <div class="admin h-screen w-screen flex">
    <MenuComponents />
    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
// 自定义路由规则，需要登录验证
export default {
  route: { meta: { auth: true } },
};
</script>

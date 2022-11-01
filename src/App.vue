<script setup lang="ts">
import helper, { env } from "@/types/helper";
console.log(helper, env);
</script>

<template>
  <ul class="bg-red-800">
    <li>首页</li>
    <li>我的</li>
    <li>列表</li>
  </ul>
  <router-view></router-view>
</template>

<style scoped></style>

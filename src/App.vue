<script setup lang="ts">
import userApi from "@/apis/userApi";

const response = await userApi.login();
console.log(response.result.token);
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

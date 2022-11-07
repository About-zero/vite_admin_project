<template>
  <div
    class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center"
  >
    <img
      src="../../public/images/children.jpg"
      class="w-56 h-56 object-cover rounded-full border-8 border-white mb-3"
    />
    <div>
      <router-link :to="{ name: 'admin.home' }" class="hd-button"
        >后台管理</router-link
      >
      <router-link :to="{ name: 'login' }" class="hd-button ml-3 hd-danger"
        >用户登录</router-link
      >
    </div>
    <div class="text-gray-400 text-xs font-mono drop-shadow-sm mt-5">
      大苏打实打实
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

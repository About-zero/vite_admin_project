<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="hd-input" />
</template>

<script setup lang="ts"></script>

<style scope lang="scss">
.hd-input {
  @apply border w-full rounded-sm py-1 px-2 border-gray-200 placeholder:text-sm outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>

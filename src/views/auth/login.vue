<template>
  <div
    class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 md:p-0"
  >
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
        <div class="mt-8">
          <hdInput placeholder="请输入手机号或邮箱" v-model="form.account" />
          <hdInput placeholder="请输入登录密码" class="mt-3" />
        </div>
        <!-- <button class="hd-button mt-5">登录</button> -->
        <hdButton />
        <div class="flex gap-2 justify-center mt-5">
          <hdLink />
          <!-- <a href="" class="text-xs text-gray-700 hover:text-violet-700">网站首页</a> -->
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img
          src="../../../public/images/login.jpg"
          class="h-96 w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  account: "aaa",
  password: "",
});
</script>
<style scoped lang="scss">
.hd-input {
  @apply border w-full rounded-sm py-1 px-2 border-gray-200 placeholder:text-sm outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
.hd-button {
  @apply bg-violet-700 text-white w-full py-2 rounded-md hover:bg-violet-500 duration-300;
}
</style>

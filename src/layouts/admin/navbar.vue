<script setup lang="ts">
import user from "@/store/userStore";
import utils from "@/utils";
import Notification from "@/components/notification.vue";
import menuService from "@/composables/menu";
import Breadcrumb from "@/components/breadcrumb.vue";
const userStore = user();

// 全屏方法
const fullScreen = () => {
  document.documentElement.requestFullscreen();
};
</script>
<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div @click="menuService.toggleState">
        <i
          class="fas fa-align-left mr-2 text-gray-700 cursor-pointer"
          v-if="menuService.close.value"
        ></i>
        <i
          class="fas fa-align-right mr-2 text-gray-700 cursor-pointer"
          v-else
        ></i>
      </div>
      <Breadcrumb class="hidden md:block" />
    </div>

    <div class="flex justify-center items-center relative cursor-pointer">
      <Notification class="mr-8" />
      <i class="fas fa-expand mr-8" @click="fullScreen"></i>
      <div class="group relative">
        <div class="flex justify-center items-center">
          <img
            :src="userStore.info?.avater"
            class="w-8 h-8 rounded-full object-cover"
          />
          <span class="ml-2 text-sm text-gray-600">{{
            userStore.info?.name
          }}</span>
        </div>
        <section
          class="group-hover:block absolute right-0 top-full z-50 bg-white shadow-sm px-5 whitespace-nowrap border rounded-sm hidden"
        >
          <div class="flex items-center cursor-pointer border-b py-3">
            <a class="fab fa-dochub"></a>
            <span class="text-xs text-gray-600 ml-2">文档资料</span>
          </div>
          <div class="flex items-center cursor-pointer border-b py-3">
            <a class="fas fa-house-user"></a>
            <span class="text-xs text-gray-600 ml-2">网站首页</span>
          </div>
          <div
            class="flex items-center cursor-pointer py-3"
            @click="utils.user.logout()"
          >
            <a class="fas fa-outdent"></a>
            <span class="text-xs text-gray-600 ml-2">退出登录</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>

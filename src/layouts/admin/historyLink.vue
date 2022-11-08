<script setup lang="ts">
import { ref } from "vue";
// import menuStore from "@/store/menuStore";
// const menu = menuStore();
import menuService from "@/composables/menu";
</script>
<template>
  <div
    class="hidden md:block bg-gray-50 p-5 border-t border-b"
    v-show="menuService.history.value.length"
  >
    <div class="grid grid-flow-col gap-3 justify-start">
      <div
        v-for="item of menuService.history.value"
        class="border bg-white rounded-sm shadow-sm py-2 px-3 text-sm hover:bg-violet-600 hover:text-white duration-300"
        :class="{ 'bg-violet-600 text-white': $route.name === item.route }"
      >
        <router-link :to="{ name: item.route }">
          {{ item.title }}
        </router-link>
        <i class="fas fa-times ml-1 hover:text-yellow-100 cursor-pointer"></i>
        <!-- @click="menu.removeHistoryMenu(item)" -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>

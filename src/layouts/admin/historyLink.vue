<script setup lang="ts">
import { ref } from "vue";

const links = ref<{ title: string }[]>([
  { title: "编辑器" },
  { title: "订单管理" },
  { title: "用户管理" },
  { title: "销售总额" },
]);
</script>
<template>
  <div class="hidden md:block bg-gray-50 p-5 border-t border-b">
    <div class="grid grid-flow-col gap-3 justify-start">
      <a
        href=""
        v-for="link of links"
        class="border bg-white rounded-sm shadow-sm py-2 px-3 text-sm text-gray-600 hover:bg-violet-600 hover:text-white duration-300"
        >{{ link.title }}
        <i class="fas fa-times ml-1"></i>
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>

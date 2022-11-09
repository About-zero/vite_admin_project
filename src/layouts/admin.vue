<script setup lang="ts">
import MenuComponents from "./admin/menu.vue";
import Navbar from "./admin/navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
import menuStore from "@/store/menuStore";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { watch } from "vue";
import menu from "@/composables/menu";
const route = useRoute();
// const menu = menuStore();
// menu.init();
// // menuStore().init();
// onBeforeRouteUpdate(() => {
//   menu.addHistoryMenu(route);
// });

watch(
  route,
  () => {
    menu.addHistoryMenu(route);
  },
  { immediate: true }
);
</script>
<template>
  <div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
    <MenuComponents />
    <div class="content bg-gray-200 grid grid-rows-[auto_1fr]">
      <div>
        <Navbar />
        <HistoryLink />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view #default="{ Component, route }">
          <Transition
            appear
            class="animate__animated"
            :enter-active-class="
              route.meta.enterClass ?? 'animate__fadeInRight'
            "
            :leave-active-class="
              route.meta.leaveClass ?? 'animate__fadeOutLeft'
            "
          >
            <component :is="Component" class="absolute w-full" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.animate__fadeInRight {
  animation-duration: 0.5s;
}
.animate__fadeOutLeft {
  animation-duration: 0.3s;
}
</style>

<script lang="ts">
// 自定义路由规则，需要登录验证
export default {
  route: { meta: { auth: true } },
};
</script>

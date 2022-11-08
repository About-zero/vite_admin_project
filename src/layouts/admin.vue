<script setup lang="ts">
import MenuComponents from "./admin/menu.vue";
import Navbar from "./admin/navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
import menuStore from "@/store/menuStore";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
const route = useRoute();
const menu = menuStore();
menu.init();
// menuStore().init();
onBeforeRouteUpdate(() => {
  menu.addHistoryMenu(route);
});
</script>
<template>
  <div class="admin min-h-screen w-screen flex">
    <!-- <MenuComponents class="hidden md:block" /> -->
    <div class="content flex-1 bg-gray-200">
      <Navbar />
      <HistoryLink />
      <div class="m-5">
        <router-view #default="{ Component }">
          <Transition
            appear
            enter-active-class="animate__animated animate__bounceInRight"
          >
            <component :is="Component" />
          </Transition>
        </router-view>
      </div>
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

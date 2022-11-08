<script setup lang="ts">
import menuStore from "@/store/menuStore";
import { IMenu } from "#/menu";
import router from "@/router";

const menu = menuStore();
const reset = () => {
  menu.menus.forEach((menu) => {
    menu.isClick = false;
    menu.children?.forEach((cmenu) => {
      cmenu.isClick = false;
    });
  });
};
const handle = (pmenu: IMenu, cmenu?: IMenu) => {
  reset();
  pmenu.isClick = true;
  if (cmenu) {
    cmenu.isClick = true;
    router.push({ name: cmenu.route });
  }
};
</script>
<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-wind text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">驭风后台管理</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(menu, index) of menu.menus" :key="index">
        <dt @click="handle(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="text-md">{{ menu.title }}</span>
          </section>
          <section>
            <i
              class="fas fa-angle-down duration-300"
              :class="{ 'rotate-180': menu.isClick }"
            ></i>
          </section>
        </dt>
        <dd
          :class="{ active: cmenu?.isClick }"
          v-show="menu.isClick"
          v-for="(cmenu, key) of menu.children"
          :key="key"
          @click="handle(menu, cmenu)"
        >
          {{ cmenu?.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>
<style scoped lang="scss">
.left-container {
  dl {
    @apply text-gray-300 text-sm;
    dt {
      @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
      section {
        @apply flex items-center;
        i {
          @apply mr-2 text-xl;
        }
      }
    }
    dd {
      @apply py-3 pl-2 mt-2  text-white rounded-md cursor-pointer  duration-300  hover:bg-violet-500 bg-gray-700;
      &.active {
        @apply bg-violet-700;
      }
    }
  }
}
</style>

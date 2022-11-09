<script setup lang="ts">
import menuService from "@/composables/menu";
import { watch } from "vue";
import { useRoute } from "vue-router";
// import menuStore from "@/store/menuStore";
// import { IMenu } from "#/menu";
// import router from "@/router";

// const menu = menuStore();
// const reset = () => {
//   menu.menus.forEach((menu) => {
//     menu.isClick = false;
//     menu.children?.forEach((cmenu) => {
//       cmenu.isClick = false;
//     });
//   });
// };
// const handle = (pmenu: IMenu, cmenu?: IMenu) => {
//   reset();
//   pmenu.isClick = true;
//   if (cmenu) {
//     cmenu.isClick = true;
//     router.push({ name: cmenu.route });
//   }
// };
const route = useRoute();
watch(
  route,
  () => {
    menuService.setCurrentMenu(route);
  },
  { immediate: true }
);
</script>
<template>
  <div class="admin-menu" :class="{ close: menuService.close.value }">
    <div class="menu w-[200px] bg-gray-800">
      <div class="logo">
        <i class="fas fa-wind text-fuchsia-300 mr-2 text-[25px]"></i>
        <span class="text-md">驭风后台管理</span>
      </div>
      <!-- 菜单 -->
      <div class="container">
        <dl v-for="(menu, index) of menuService.menus.value" :key="index">
          <!-- <dt @click="handle(menu)"> -->
          <dt @click="menuService.toggleParentMenu(menu)">
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
            :class="
              !menu.isClick || menuService.close.value ? 'hidden px-2' : 'block'
            "
          >
            <div
              :class="{ active: cmenu?.isClick }"
              v-for="(cmenu, key) of menu.children"
              :key="key"
              @click="$router.push({ name: cmenu.route })"
            >
              {{ cmenu?.title }}
            </div>
          </dd>
          <!-- @click="handle(menu, cmenu)" -->
        </dl>
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="bg block md:hidden" @click="menuService.toggleState"></div>
  </div>
</template>
<style scoped lang="scss">
.admin-menu {
  @apply z-20;
  .menu {
    @apply h-full;
    .logo {
      @apply text-gray-300 flex items-center p-4;
    }
    .container {
      dl {
        @apply text-gray-300 text-sm relative p-4;
        dt {
          @apply text-sm flex justify-between cursor-pointer items-center;
          section {
            @apply flex items-center;
            i {
              @apply mr-2 text-xl;
            }
          }
        }
        dd {
          div {
            @apply py-3 pl-2 my-2  text-white rounded-md cursor-pointer  duration-300  hover:bg-violet-500 bg-gray-700;
            &.active {
              @apply bg-violet-700;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .admin-menu {
    &.close {
      .menu {
        width: auto;
        .logo {
          @apply justify-center;
          i {
            @apply mr-0;
          }
          span {
            @apply hidden;
          }
        }
        .container {
          dl {
            dt {
              @apply flex justify-center;
              section {
                i {
                  @apply mr-0;
                }
                span {
                  @apply hidden;
                }
                &:nth-of-type(2) {
                  @apply hidden;
                }
              }
            }
            &:hover {
              dd {
                @apply block absolute left-full top-[0px] w-[200px] bg-gray-700;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .admin-menu {
    @apply h-screen w-[200px] absolute left-0 top-0 z-50;
    .menu {
      @apply h-full z-50 absolute;
      .close {
      }
    }
    .bg {
      @apply bg-gray-100 opacity-75 w-screen h-screen z-40 absolute left-0 top-0;
    }
    &.close {
      @apply hidden;
    }
  }
}
</style>

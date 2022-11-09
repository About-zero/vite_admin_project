<script setup lang="ts">
import { nextTick } from "process";
import { ref } from "vue";

const activeName = ref("site");
const show = ref(false);
nextTick(() => {
  document.documentElement.addEventListener("click", () => {
    show.value = false;
  });
});
</script>
<template>
  <div class="notification">
    <i class="fas fa-envelope" @click.stop="show = !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a href="">大客户大会上扩大后的卡拉合适的，安徽大山里的哈克斯的</a>
        <a href="">大客户大会上扩大后的卡拉合适的，安徽大山里的哈克斯的</a>
        <a href="">大客户大会上扩大后的卡拉合适的，安徽大山里的哈克斯的</a>
        <a href="">大客户大会上扩大后的卡拉合适的，安徽大山里的哈克斯的</a>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped lang="scss">
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-3 py-2 border rounded-md shadow-md right-[-60px] z-10 w-[300px] text-sm;
    a {
      @apply truncate overflow-hidden block border-b pb-2 my-3 hover:text-violet-600;
    }
  }
}
</style>

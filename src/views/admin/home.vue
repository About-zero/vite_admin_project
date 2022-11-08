<script setup lang="ts">
import { nextTick, ref } from "vue";
import { echart1, echart2 } from "./echart";

interface ICard {
  title: string;
  price: number;
  icon: string;
  iconColor: string;
  totalTitle: string;
  total: number;
}
const cards = ref<ICard[]>([
  {
    title: "总人数",
    price: 2222,
    icon: "fas fa-address-card",
    iconColor: "text-violet-500",
    totalTitle: "总人数",
    total: 2123123123,
  },
  {
    title: "销售额",
    price: 1231,
    icon: "fas fa-apple-alt",
    iconColor: "text-green-500",
    totalTitle: "总销售额",
    total: 213123123,
  },
  {
    title: "订单数",
    price: 51123,
    icon: "fas fa-award",
    iconColor: "text-blue-500",
    totalTitle: "总订单数",
    total: 51231,
  },
  {
    title: "评论数",
    price: 5123,
    icon: "fas fa-baseball-ball",
    iconColor: "text-red-500",
    totalTitle: "总评价数",
    total: 51254131,
  },
]);

nextTick(() => {
  echarts.init(document.getElementById("echart1")).setOption(echart1);
  echarts.init(document.getElementById("echart2")).setOption(echart2);
});
</script>
<template>
  <div class="grid md:grid-flow-col gap-3 bg-gray-100">
    <el-card
      shadow="hover"
      :body-style="{ padding: '20px' }"
      v-for="(card, index) of cards"
      :key="index"
      class="cursor-pointer"
    >
      <template #header>
        <div class="flex justify-between items-center">
          {{ card.title }}
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex mt-3 justify-between items-center">
        <span class="text-3xl"> $29322</span>
        <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
      </section>
      <section class="text-base mt-6 flex justify-between">
        {{ card.totalTitle }}
        <span>{{ card.total }}</span>
      </section>
    </el-card>
  </div>
  <div class="mt-5 grid md:grid-cols-2 gap-3">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div>用户统计</div>
      </template> 
      <div id="echart1" class="h-72 w-full"></div>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div>销售额</div>
      </template>
      <div id="echart2" class="h-72 w-full"></div>
    </el-card>
  </div>
</template>
<style scoped lang="scss"></style>

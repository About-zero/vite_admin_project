<script setup lang="ts">
import { ref } from "vue";
import Editor from "@/components/markdown/editor.vue";
const content = ref("aaaa");
</script>
<template>
  <div>
    <Editor v-model="content" :height='300' placeholder="请输入markdown内容"/>
  </div>
</template>
<style scoped lang="scss"></style>

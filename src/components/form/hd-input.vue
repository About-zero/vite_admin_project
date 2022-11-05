<script setup lang="ts">
import { emit } from "process";

const props = defineProps({
  modelValue: String,
});
</script>

<template>
  <input
    type="text"
    class="hd-input"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scope lang="scss">
.hd-input {
  @apply border w-full rounded-sm py-1 px-2 border-gray-200 placeholder:text-sm outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>

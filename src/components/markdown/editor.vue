<script setup lang="ts">
import { nextTick } from "process";
import ToastEditor from "./toastEditor";
interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
});
const emit = defineEmits(["update:modelValue"]);
nextTick(() => {
  const toastUI = new ToastEditor(
    "#editor",
    `${props.height}px`,
    `${props.modelValue}`
  );
  toastUI.editor.on("change", (type: string) => {
    emit(
      "update:modelValue",
      toastUI.editor[type === "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>
<template>
  <div id="editor"></div>
</template>
<style lang="scss">
// <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
@import "https://uicdn.toast.com/editor/latest/toastui-editor.min.css";
#editor {
  @apply bg-white;
  .toastui-editor-mode-switch {
    display: none !important;
  }
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #fff;
  }
}
</style>

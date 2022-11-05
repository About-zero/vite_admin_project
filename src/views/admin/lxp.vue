<template>
  <Form @submit="onSubmit">
    <Field
      name="account"
      label="账号"
      :rules="{ required: true, email: true }"
      :validate-on-input="true"
      #default="{ field, errorMessage }"
    >
      <input v-bind="field" v-model="account" />
      <hr />
      <p>{{ errorMessage }}</p>
    </Field>
    <!-- <input type="text" /> -->
    <hr />
    <button class="border bg-green-500 px-4 rounded-md text-white">提交</button>
  </Form>
</template>

<script setup lang="ts">
import v from "@/plugins/validate";
const { Form, Field } = v;
// import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
// import { ref } from "vue";
// import { required, min, max, confirmed, email } from "@vee-validate/rules";
// import { localize } from "@vee-validate/i18n";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
// const account = ref<string>("");
// defineRule("email", email);
// defineRule("required", required);
// configure({
//   generateMessage: localize("zh_CN", zh_CN),
// });
// const emailRule = (value) => {
//   return /@/.test(value) ? true : "邮箱格式错误";
// };
const onSubmit = (value) => {
  console.log(value);
};
</script>

<style scoped lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
}
</style>

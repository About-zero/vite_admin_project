<script setup lang="ts">
import v from "@/plugins/validate";
// import { defineRule, configure, useField, useForm } from "vee-validate";
// import { ref } from "vue";
// import { required, min, max, confirmed, email } from "@vee-validate/rules";
// import { localize } from "@vee-validate/i18n";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
// import * as yup from "yup";
// configure({
//   generateMessage: localize("zh_CN", zh_CN),
// });
// defineRule("required", required);
// defineRule("email", email);

const { handleSubmit, errors } = v.useForm({
  initialValues: {
    username: "lxp",
    password: "",
  },
  validationSchema: {
    // username: {
    //   required: true,
    //   email: true,
    // },
    username: v.yup.string().required().email().label('账号'),
    password: { required: true },
  },
});
const { value: usernameValue } = v.useField(
  "username",
  {},
  { label: "用户名" }
);
const { value: passwordValue } = v.useField("password", {}, { label: "密码" });
const onSubmit = handleSubmit((value) => {
  console.log(value);
});
</script>
<template>
  <div>
    <form @submit="onSubmit">
      <section>
        <input type="text" v-model="usernameValue" />
        <p class="error" v-if="errors.username">{{ errors.username }}</p>
      </section>
      <section>
        <input type="text" v-model="passwordValue" />
        <p class="error" v-if="errors.password">{{ errors.password }}</p>
      </section>
      <button class="border bg-green-500 px-4 rounded-md text-white">
        提交
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-200;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
  .error {
    @apply bg-red-600 border border-gray-800 p-2 text-white;
  }
}
</style>

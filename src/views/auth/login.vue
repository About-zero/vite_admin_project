<script setup lang="ts">
import userApi from "@/apis/userApi";
import { store } from "@/utils";
import v from "@/plugins/validate";
import { useRouter } from "vue-router";
const router = useRouter();
const { Form, Field, ErrorMessage } = v;

// yup写法

// const schema = v.yup.object({
//   account: v.yup.string().required().email().label('账号'),
//   password: v.yup.string().required().min(3).label('密码'),
// });
const schema = {
  // account: { required: true, email: true },
  account: { required: true, regex: /.+@.+|\d{11}/ },
  password: { required: true, min: 3 },
};
const onSubmit = async (values: any) => {
  const {
    result: { token },
  } = await userApi.login(values);
  store.set("token", {
    token,
  });
  router.push({ name: "home" });
};
</script>
<script lang="ts">
// 自定义路由信息
export default {
  route: { name: "login", meta: { guest: true } },
};
</script>
<template>
  <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
          <div class="mt-8">
            <Field
              name="account"
              value="lxp@qq.com"
              as="input"
              class="hd-input"
              label="账号"
              placeholder="请输入邮箱或手机号"
            />
            <div v-if="errors.account" class="hd-error">请输入邮箱或手机号</div>
            <!-- <ErrorMessage name="account" as="div" class="hd-error" /> -->
            <Field
              name="password"
              value="admin"
              as="input"
              class="hd-input mt-3"
              label="密码"
              type="password"
              placeholder="请输入密码"
            />
            <ErrorMessage name="password" as="div" class="hd-error" />
          </div>
          <!-- <button class="hd-button mt-5">登录</button> -->
          <hdButton />
          <div class="flex justify-center mt-3">
            <i
              class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-2 cursor-pointer"
            ></i>
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <hdLink />
          <!-- <a href="" class="text-xs text-gray-700 hover:text-violet-700">网站首页</a> -->
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="../../../public/images/login.jpg"
          class="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  </Form>
</template>

<style scoped lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5 md:p-0;
}
.hd-button {
  @apply bg-violet-700 text-white w-full py-2 rounded-md hover:bg-violet-500 duration-300;
}
</style>

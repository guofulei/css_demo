<template>
  <div class="t1">
    <a-card style="width: 450px" class="card">
      <h2 style="text-align: center;">登录</h2>
      <a-form :model="formState" labelAlign="left" name="normal_login" class="login-form" @finish="onFinish"
        @finishFailed="onFinishFailed">
        <a-form-item label="用户名" name="username" :labelCol="{ span: 5, offset: 1 }"
          :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="密码" name="password" :labelCol="{ span: 5, offset: 1 }"
          :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item :labelCol="{ span: 5, offset: 1 }">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
          </a-form-item>
        </a-form-item>
        <a-form-item style="text-align: center;">
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <a href="">register now!</a>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts" setup name="GradientDemo">
import { reactive, ref } from 'vue';
const disabled = ref(false)
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: false
})
</script>
<style lang="less" scoped>
.t1 {
  position: absolute;
  background: radial-gradient(circle, #FF6666, #FFFFCC, #66CC99);
  // width: 100%;
  // height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  // overflow-x: scroll;
  // scrollbar-width: none;
  /* firefox */
  /* 设置溢出滚动 */
  .card {
    // background-color: transparent;
    // opacity: 0.8;
    top: 30%;
    left: 40%;
  }
}
</style>
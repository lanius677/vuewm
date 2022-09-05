<template>
  <div class="login">
    <Header title="登录"></Header>
    <div class="img">外卖</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="data.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="data.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 注册 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { reactive } from "vue";
const data=reactive({
  username:'',
  password:''
})

const onSubmit=()=>{
  
}
</script>

<style scoped lang="less">
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
}
</style>

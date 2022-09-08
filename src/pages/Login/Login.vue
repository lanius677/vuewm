<template>
  <div class="login">
    <Header title="登录"></Header>
    <div class="img">外卖</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="data.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="data.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 登录 </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" @click="toReg">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Dialog, Toast } from "vant";
import { useRouter } from "vue-router";
import { reactive } from "vue";

const data = reactive({
  username: "",
  password: "",
});
interface List {
  username: string;
  password: string;
}

const router = useRouter();
//提交账号
const onSubmit = (value: List) => {
  //判断localStroage里的userInfo是否存在
  if (!localStorage.userInfo) {
    //如果不存在，提示账号示注册。并return出去
    Toast("账号未注册");
    return;
  } else {
    //如果userInfo存在,用pares反序列化并赋值给userInfo
    let userInfo = JSON.parse(localStorage.userInfo);
    //判断userInfo与输入来的value是否一致
    if (userInfo.username === value.username) {
      if (userInfo.password === value.password) {
        //如果账号密码一致，提示成功，并在localStroage存放一个isLogin:1
        Toast.success("登录成功");
        localStorage.setItem("isLogin", "1");
        router.push("./home");
      }else{
        //如果密码错误就提示
        Toast.fail('密码错误')
      }
    } else {
      //如果userInfo与value输入进来的不一致，提示输入账号有错
      Dialog.alert({
        title: "",
        message: "账号未注册。",
      });
    }
  }
};

//去注册
const toReg = () => {
  router.push("./register");
};
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

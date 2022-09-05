<template>
  <div class="register">
    <Header title="注册"></Header>
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
        <van-button round block type="primary" native-type="submit"> 注册 </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" @click="togoLogin"> 已有账号去登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Toast } from "vant";
import 'vant/lib/toast/style/index';
import { reactive } from "vue";
import {useRouter} from 'vue-router';

const router=useRouter()

const data=reactive({
  username:'',
  password:''
})

interface List{
  username:string,
  password:string
}

const onSubmit=(value:List)=>{
  console.log(value);
  if(localStorage.userInfo){
    let userInfo=JSON.parse(localStorage.userInfo)
    if(userInfo.username===value.username){
      Toast('该账号已存在')
      return;
    }
  }else{
      register(value);
    }
}

//注册
const register=(value:List)=>{
    Toast('注册成功')
    localStorage.setItem('userInfo',JSON.stringify(value))
    router.push('./login')
}


//跳转登录
const togoLogin=()=>{
  router.push('./login')
}
</script>

<style scoped lang="less">
.register {
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

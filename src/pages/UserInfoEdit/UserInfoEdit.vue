<template>
  <div class="userEdit">
    <Header title="账号管理"></Header>
    <div class="input-item">
      <van-cell-group inset>
        <van-field v-model="data.nickName" label="昵称" placeholder="请输入昵称" />
        <van-field
          v-model="data.introdueSign"
          label="个性签名"
          placeholder="请输入修改签名"
        />
        <van-field v-model="data.password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
      <div class="btn">
        <van-button class="save-btn" type="primary" @click="save">保存</van-button>
        <van-button type="primary" class="save-btn" @click="logout">退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { reactive } from "vue";
import {Toast} from 'vant';
import {useRouter} from 'vue-router';
const data = reactive({
  nickName: "",
  password: "",
  introdueSign: "Hello World",
});

const router=useRouter()
//保存
const save=()=>{
  // 判断的data中的nickName和password是否存在
  if(data.nickName && data.password){
    //先获取localStorage
    const userInfo=JSON.parse(localStorage.userInfo)
    const newUserInfo={
      // 在newUserInfo中，判断data.nickName和userInfo['username']两个值存在，将存在的值重新赋值给username和password
      username:data.nickName||userInfo['username'],
      password:data.password||userInfo['password']
    }
    //将newUserInfo重新赋值给userInfo
    localStorage.setItem('userInfo',JSON.stringify(newUserInfo))
    Toast.success('修改成功')
    router.push('./mine')
  }else{
    Toast.fail('请输入修改的容')
  }
}

//退出登录
const logout=()=>{
  //将localStorage中的isLogin清空。
  localStorage.removeItem("isLogin");
  Toast("退出登录")
  router.push('./login')
}

</script>

<style scoped lang="less">
.userEdit {
  .input-item {
    margin-top: 20px;
    .btn {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: auto;
      .save-btn {
        border-radius: 20px;
        width: 80%;
        margin: 15px auto;
      }
    }
  }
}
</style>

<template>
  <div class="mine">
    <Header title="个人"></Header>
    <div class="content">
      <div class="user-info">
        <div class="info">
          <img src="@/assets/vue.svg"  />
          <div class="user-desc">
            <span>昵称：{{userInfo.name}}</span>
            <span class="name">个性签名：{{userInfo.descibe}}</span>
          </div>
        </div>
      </div>
      <ul class="user-list">
        <li class="van-hairline-bottom">
          <span>我的订单</span>
          <van-icon name="arrow" @click="togo('./order')"></van-icon>
        </li>
        <li class="van-hairline-bottom">
          <span>地址管理</span>
          <van-icon name="arrow" @click="togo('./address')"></van-icon>
        </li>
        <li class="van-hairline-bottom">
          <span>账号管理</span>
          <van-icon name="arrow" @click="togo('./userinfoedit')"></van-icon>
        </li>
      </ul>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

import {reactive} from 'vue';
import {useRouter} from 'vue-router';


const userInfo=reactive({
  name:'fjx',
  descibe:'hello'
})


// 路由跳转
const router=useRouter()
const togo=(path:string)=>{
  router.push(path)
}
</script>

<style scoped lang="less">
.mine {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .user-info {
      width: 94%;
      margin: 10px;
      height: 115px;
      background: linear-gradient(90deg, #ffc400, #c7c351);
      box-shadow: 0 2px 5px #ffc400;
      border-radius: 6px;
      .info {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 25px 20px;
        box-sizing: border-box;
        img {
          border-radius: 50%;
          margin-top: 4px;
          border: solid 2px gray;
        }
        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          line-height: 20px;
          font-size: 14px;
          color: #fff;
          justify-content: space-between;
          span {
            color: #fff;
            font-size: 14px;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
      padding: 0 20px;
      margin-top: 20px;
      background-color: #fff;
      li {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .van-icon-arrow {
          margin-top: 13px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="footer">
    <div class="item">
      <van-icon name="wap-home-o" size="30" />
      <router-link to="/home" class="nav-item" active-class="nav-color">首页</router-link>
    </div>

    <div class="item">
      <van-icon name="cart-o" size="30" />
      <router-link to="/cart" class="nav-item" active-class="nav-color"
        >购物车</router-link
      >
    </div>

    <div class="item">
      <van-icon name="orders-o" size="30" />
      <router-link to="/order" class="nav-item" active-class="nav-color"
        >订单</router-link
      >
    </div>

    <div class="item">
      <van-icon name="user-o" size="30" />
      <router-link to="/mine" class="nav-item" active-class="nav-color">个人</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="less">
.footer {
  display: flex;
  font-size: 20px;
  background-color: #fff;
  border-top: 0.5px solid #eee;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .nav-color {
      color: #ffc400;
    }
    .nav-item {
      display: flex;
      align-items: center;
    }
  }
}
</style>

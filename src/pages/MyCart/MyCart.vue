<template>
  <div class="cart">
    <div class="content">购物车</div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="less">
.cart {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

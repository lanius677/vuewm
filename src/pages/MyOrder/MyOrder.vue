<template>
  <div class="order">
    <div class="content">订单</div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="less">
.order {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

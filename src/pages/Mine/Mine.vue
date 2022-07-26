<template>
  <div class="mine">
    <div class="content">个人</div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="less">
.mine{
  height: 100%;
  display: flex;
  flex-flow: column;
  .content{
    flex:1;
    overflow-y: auto;

  }
}
</style>

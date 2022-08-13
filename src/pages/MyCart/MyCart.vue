<template>
  <div class="cart">
    <Header :title="title"></Header>
    <Blank></Blank>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Blank from '@/components/Blank.vue';
import Header from '@/components/Header.vue';
import {ref} from 'vue';
const title=ref('购物车')
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

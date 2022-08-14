<template>
  <div class="cart">
    <Header :title="title"></Header>
    <CartDetails v-if="isShow"></CartDetails>
    <Blank v-else></Blank>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Blank from '@/components/Blank.vue';
import Header from '@/components/Header.vue';
import CartDetails from './components/CartDetails.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const title = ref('购物车')

const isShow = ref(true)

//初始化是否展示
const store = useStore()
const init = () => {
  if (store.state.cartList.length <= 0) {
    isShow.value = false
  }
}

onMounted(()=>{
  init()
})


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

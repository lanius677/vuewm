<template>
  <div class="order">
    <Header title="订单"></Header>
    <div class="content">
      <van-tabs>
        <van-tab v-for="(i, index) in data.navData" :key="index" :title="i">
          <div 
          v-for="(i1, index) in store.state.orderList" :key="index"
          v-if="i==='全部' && store.state.orderListed.length"
          >
            <van-card
              :num="i1.num"
              :price="i1.price"
              :desc="i1.desc"
              :title="i1.title"
              :thumb="i1.pic"
            />
          </div>
          <Blank v-else class="blank"></Blank>
        </van-tab>
      </van-tabs>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blank from "@/components/Blank.vue";


import { useStore } from "vuex";
import { reactive } from "vue";

const store = useStore();

console.log(store.state.orderListed);

const data = reactive({
  navData: ["全部", "待付款", "待发货", "已发货"],
});
</script>

<style scoped lang="less">
.blank{
  margin-top:260px
}
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

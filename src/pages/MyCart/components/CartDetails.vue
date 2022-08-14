
<template>
  <div class="cartDetails">
    <!-- 商品列表 -->
    <div class="content">
      <van-checkbox-group v-model="data.checked">
        <div v-for="(i, index) in store.state.cartList" :key="index">
          <FoodAdd :item="i" :addClick="addClick" :showCheckbox="true"></FoodAdd>
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useStore } from 'vuex';
import FoodAdd from '@/components/FoodAdd.vue';

const store = useStore();

interface List {
  id: number,
  price: number,
  title: string,
  num: number,
  add: boolean
}

console.log(store.state.cartList);

const data = reactive({
  checked: [0,1,2,3]
});

const addClick=()=>{

}


</script>

<style scoped lang="less">
.cartDetails {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 58px;
  }

  .buy {
    position: fixed;
    bottom: 58px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
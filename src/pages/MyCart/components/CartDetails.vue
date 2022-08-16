
<template>
  <div class="cartDetails">
    <!-- 商品列表 -->
    <div class="content">
      <van-checkbox-group v-model="data.checked">
        <div v-for="(i, index) in store.state.cartList" :key="index">
          <FoodAdd :item="i" :showCheckbox="true" :onChange="onChange"></FoodAdd>
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="choses">全选</van-checkbox>

    </van-submit-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useStore } from 'vuex';
import FoodAdd from '@/components/FoodAdd.vue';

const store = useStore();

interface List {
  id: number,
  price: number,
  title: string,
  num: number,
  add: boolean,
  name: number | string
}

// 商品默认初始化
const init = () => {
  data.checked = store.state.cartList.map((item: List) => item.id)
}
onMounted(() => {
  init()
})

const data = reactive({
  checked: [],
  choses:true
});

// 商品的个数同步
const onChange = (value: number, detail: List) => {
  store.state.cartList.forEach((item: List) => {
    if (item.id === detail.name) {
      item.num = value
    }
  });
}

const onSubmit=()=>{

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
<template>
  <div class="createOrderContainer">
    <Header title="生成订单"></Header>
    <van-contact-card type="edit" :tel="data.currentContact.tel" :name="data.currentContact.name" @click="onEdit" />

    <div class="content">
      <div class="" v-for="(i, index) in store.state.orderList" :key="index">
        <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic" />
      </div>
    </div>

    <div class="payWrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{initPrice}}</span>
      </div>
      <van-button class="payButton" type="primary" @click="handleCreateOrder" block>生成订单</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import { computed, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const data = reactive({
  currentContact: {
    name: '677',
    tel: '123123123',
  },

  allPrice:0
})

interface List{
  price:number,
  num:number
}

//地址编辑按钮
const onEdit = () => {

}

//生成订单按钮
const handleCreateOrder=()=>{

}

const initPrice=computed(()=>{
  let price:number=0
  if(store.state.orderList.length){
    store.state.orderList.map((item:List)=>{
      price+=item.num*item.price
    })
  }
 return data.allPrice=price
})

</script>

<style scoped lang="less">
.createOrderContainer{
  display: flex;
  flex-flow: column;
  height: 100%;
  .content{
    flex: 1;
    overflow: auto;
  }
  .payWrap{
    padding: 10px 0;
    widows: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div{
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2){
        color: red;
        font-size: 18px;
      }
    }
    .payButton{
      width:90%;
      margin: 0 auto;
    }
  }
}
</style>
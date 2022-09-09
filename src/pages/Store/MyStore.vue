<template>
  <div class="storeDetails">
    <Header title="店铺"></Header>
    <div class="content">
      <div class="img"></div>
      <div class="foodClassify">
        <div class="name">
          {{ data.title }}
          <img :src="data.img" class="store-img">
        </div>
        <div class="classify">
          <van-tabs color="#ffc400">
            <van-tab v-for="(i, index) in data.storeData" :key="index" :title="i.name">
              <FoodList :index="index" :foodData="i.data"></FoodList>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" dot @click="service" />
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="toCart" />
        <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
        <van-action-bar-button type="danger" text="立即购买" @click="clickBuy" />
      </van-action-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import FoodList from './components/FoodList.vue';

import { onMounted, reactive } from 'vue';
import { Toast } from 'vant';
import {getStoreData} from '@/request/api';
import { useStore } from 'vuex';
import { useRouter,useRoute } from 'vue-router';

const data=reactive({
  storeData:[],
  title:"",
  img:""
})

const route=useRoute()
//数据请求
const getStore=async ()=>{
  const res= await getStoreData()
  console.log("res",res);
  if (res.status === 200 && res.data.code === 0) {
    res.data.data.forEach((item:List) => {
        if(item.title===route.query.title){
          data.title=item.title
          data.img=item.img
          data.storeData=item.storeData
        }
    });
  }
}
onMounted(()=>{
  getStore()
})

interface List {
  id: number,
  price: number,
  title: string,
  num: number,
  add: boolean,
  img:string,
  storeData:[]
}
const router = useRouter()

const store = useStore()
//加入购物车
const handleAddCart = (type: string) => {
  let newList: List[] = [];
  data.storeData.forEach((item) => {
    item.data.items?.forEach((items) => {
      items.children?.forEach((itemss) => {
        if (itemss.num > 0) {
          newList.push(itemss)
        }
      })
    })
  })
  store.commit('ADDCART', newList)
  type === 'buy' ? toCart() : ""

}

//跳转购物车
const toCart = () => {
  router.push('./cart')
}


//点击购买
const clickBuy = () => {
  handleAddCart('buy');
}

//客服的点击事件
const service = () => {
  Toast.fail({ message: '敬请期待', className: 'toast' })

}
</script>
<style>
.toast {
  z-index: 10000 !important;
}
</style>
<style scoped lang="less">
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;

  .content {
    flex: 1;
    overflow-y: auto;

    .img {
      background: url("../../assets/yuna.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }

    .foodClassify {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      .classify {
        margin-top: 10px;
      }

      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;

        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
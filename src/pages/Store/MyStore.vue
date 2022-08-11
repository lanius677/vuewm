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

import { reactive } from 'vue';
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

let data = reactive({
  title: '酸菜鱼',
  img: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
  storeData: [
    {
      name: "点菜",
      data: {
        content: "点菜",
        items: [
          {
            text: "热销套餐",
            children: [
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "招牌酸菜鱼",
                num: 0,
                price: 25.0,
                id: 0,
                add: true,
              },
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "藤椒酸菜鱼",
                num: 0,
                price: 25.0,
                id: 1,
                add: true,
              },
            ],
          },
          {
            text: "澳洲肥牛",
            children: [
              {
                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                title: "酸汤肥牛",
                num: 0,
                price: 25.0,
                id: 3,
                add: true,
              },
              {
                pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2F8694a4c27d1ed21b0ef4f3137f24cac451da80cb91b8&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645407747&t=ea2c9f772ba0df3a2d1b00b962875460",
                title: "香辣肥牛",
                num: 0,
                price: 25.0,
                id: 4,
                add: true,
              },
            ],
          },
          {
            text: "超级折扣",
            children: [
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "无骨酸菜鱼+肥牛双拼",
                num: 0,
                price: 25.0,
                id: 5,
                add: true,
              },
              {
                pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                title: "香辣水煮鱼+肥牛双拼",
                num: 0,
                price: 25.0,
                id: 6,
                add: true,
              },
            ],
          },
        ],
      },
    },
    { name: "评价", data: { content: "评价" } },
    { name: "商家", data: { content: "商家" } },
  ],
})

interface List {
  id: number,
  price: number,
  title: string,
  num: number,
  add: boolean
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
  type === 'buy' ? toCart : ""

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
 Toast.fail({message: '敬请期待', className: 'toast'})

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
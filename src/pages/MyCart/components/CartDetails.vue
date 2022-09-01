
<template>
  <div class="cartDetails">
    <!-- 商品列表 -->
    <div class="content">
      <van-checkbox-group v-model="data.result" @change="groupChange">
        <div v-for="(i, index) in store.state.cartList" :key="index">
          <FoodAdd :item="i" :showCheckbox="true" :onChange="onChange"></FoodAdd>
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar :price="allPrice * 100" button-text="提交订单" @submit="onSubmit" class="submit-all"
      v-if="data.isDetele">
      <van-checkbox v-model="data.choses" @click="choseAll">全选</van-checkbox>
    </van-submit-bar>

    <!-- 删除 -->
    <div class="buy" v-else>
      <div class="left">
        <van-checkbox v-model="data.choses" @click="choseAll">全选</van-checkbox>
      </div>
      <div class="detele" @click="deteleClick">
        删除
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed ,defineProps} from "vue";
import { useStore } from 'vuex';
import FoodAdd from '@/components/FoodAdd.vue';
import emitter from '@/common/js/eventBus';
import { Toast } from "vant";
import {useRouter} from 'vue-router';

const router=useRouter()

const {changeShow}=defineProps(['changeShow'])

const store = useStore();

interface List {
  id: number,
  price: number,
  title: string,
  num: number,
  add: boolean,
  name: number | string
}

const data = reactive({
  result: [] as any[],
  choses: true,
  isDetele: true,
});

// 商品默认初始化
const init = () => {
  data.result = store.state.cartList.map((item: List) => item.id)
}
onMounted(() => {
  init()
})



// 商品的个数同步
const onChange = (value: number, detail: List) => {
  store.state.cartList.forEach((item: List) => {
    if (item.id === detail.name) {
      item.num = value
    }
  });
}

//全选或全取消选按钮功能
const choseAll = () => {
  if (data.result.length !== store.state.cartList.length) {
    init()
  } else {
    data.result = []
  }
}

//每一选框点击事件触发
const groupChange = (result: Array<never>) => {
  // console.log(result);// [0,1,2,3] length: 4
  if (result.length === store.state.cartList.length) {
    data.choses = true
  } else {
    data.choses = false
  }
  return data.result = result
}

//计算总价
const allPrice = computed(() => {
  let countList = store.state.cartList.filter((item: List) => {
    return data.result.includes(item.id);
  })

  let sum = 0;
  countList.forEach((item: List) => {
    sum += item.num * item.price
  });
  return sum;
})

//更新数据
const updata = (type: number) => {
  return store.state.cartList.filter((item: List) => {
    return type === 2 ? data.result.includes(item.id) : !data.result.includes(item.id)
  })
}

//结算按钮功能
const onSubmit = () => {
  if (data.result.length !== 0) {
    store.commit('PAY', updata(2))
    router.push({
      path:'./createorder',
      query:{list:data.result}
    })
  } else {
    Toast.fail('请选择结算的商品')
  }
}

//监听编辑点击
emitter.on('edit', () => {
  data.isDetele = !data.isDetele
})

//删除按钮
const deteleClick = () => {
  if (data.result.length) {
    //更新删除后的购物车的数据
    store.commit('DETELE',updata(1))

    //删除后的选中
    data.result=[]

    //购物车无数据展示兜底
    if(store.state.cartList.length===0){
      store.commit('EDIT','delete')
      changeShow();
    }
  } else {
    Toast.fail('请选择要删除的商品')
  }
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
    bottom: 48px;
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
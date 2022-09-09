<template>
  <div class="item" v-for="(i, index) in item" :key="index" @click="toStore(i.title)">
    <img :src="i.pic" alt="">
    <div class="itemRight">
      <div class="title">{{ i.title}}</div>
      <div class="sales">{{ i.sales }}</div>
      <div class="price">{{ i.price }}</div>
      <div class="label">
        <div v-for="(i2, index) in i.label" :key="index">{{ i2 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import { defineProps, reactive } from 'vue';
const { item } = defineProps(['item'])

interface List {
  id: number,
  price: number,
  title: string,
  num: number,
  add: boolean,
  img:string,
}

const router=useRouter()
const toStore = (title:string) => {
  router.push({
    path:'./store',
    query:{title}
  })
}

</script>

<style scoped lang="less">
.item:not(:first-child) {
  margin-top: 10px;
}


.item {
  background: #fff;
  border-radius: 10px;
  display: flex;
  padding: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .itemRight {
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .title {
      font-size: 16px;
    }

    .label {
      display: flex;

      div {
        background-color: #ffc40047;
        padding: 2px 5px;
        border-radius: 5px;
        font-size: 12px;
      }

      div:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
}
</style>
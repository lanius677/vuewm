<template>
  <div class="item">
    <img src="" alt="">
    <div class="itemRight">
      <div class="title">{{item[0].title}}</div>
      <div class="sales">{{item[0].sales}}</div>
      <div class="price">{{item[0].price}}</div>
      <div class="itemLabel" v-for="(i,index) in item[0].label" :key="index">
          {{i}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps,reactive} from 'vue';
const {item} = defineProps(['item'])

const list=reactive({
  imgItem:item?.pic,
  title:item.title,
  price:item.price,
  itemLadel:item.label
})

console.log('item:',item);
console.log(list);
</script>

<style scoped>

</style>
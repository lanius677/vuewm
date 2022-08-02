<template>
  <div class="store-list">
    <div v-for="(i,index) in storeList" :key="index" class="store-list-item">
      <StoreItem :item="i"></StoreItem>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import StoreItem from './StoreItem.vue';

const storeList = defineProps(['storeList'])
// console.log(storeList);

</script>

<style lang="less" scoped>
.store-list-item{
  margin-top: 10px;
  margin-right: 5px;
}
</style>
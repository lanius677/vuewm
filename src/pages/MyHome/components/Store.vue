<template>
  <div class="store-list">
    <div v-for="(i,index) in storeList" :key="index">
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

</style>
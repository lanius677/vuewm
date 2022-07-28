<template>
  <div class="store-list">
    <div v-for="(i,index) in storeList" :key="index">
      <StoreList :item="i"></StoreList>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import StoreList from './StoreList.vue';

const storeList = defineProps['storeList']

</script>

<style lang="less" scoped>

</style>
<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack"/>
    <div class="title">
      {{title}}
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {useRouter} from 'vue-router';
const {title}=defineProps(['title'])

const router=useRouter()
const toBack=()=>{
  router.back();
}
</script>

<style scoped lang="less">
.header{
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  .edit{
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
  }
  .icon{
    position: absolute;
    left:10px;
  }
}

</style>
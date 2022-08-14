<template>
  <div class="contentItem">
    <div class="left">
      <van-checkbox :name="item.id" v-if="showCheckbox" checked-color="	#1989fa"></van-checkbox>
      <img :src="item.pic" alt="">
      <div class="text">
        <div class="title">{{item.title}}</div>
        <van-icon name="add-o" class="van-icon" 
        v-if="item.add && showAdd" @click="addClick(item.id)"/>
        <van-stepper 
        v-model="item.num" 
        theme="round" 
        button-size="22" 
        disable-input v-else 
        :min="1" 
        :name="item.id"
        @change="onChange"/>
      </div>
    </div>
    <div class="right">
      ￥{{item.price}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
const { item ,showAdd,addClick,onChange,showCheckbox} = defineProps(['item','showAdd','addClick','onChange','showCheckbox'])
const value = ref(1)


</script>

<style scoped lang="less">
.contentItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .right {
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
  }

  .left {
    display: flex;
    align-items: center;
    flex: 1;

    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;

      .title {
        font-size: 10px;
      }

      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>
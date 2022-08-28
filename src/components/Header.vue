<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="toBack" />
    <div class="title">
      {{ title }}
      <div class="edit" v-if="edit" @click="editClick">
        {{ store.state.edit ? '编辑' : '完成' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import emitter from '@/common/js/eventBus';
import { useStore } from 'vuex';
import { Toast } from 'vant';
const { title, edit } = defineProps(['title', 'edit'])

const router = useRouter()
const toBack = () => {
  router.back();
}
const store = useStore()
//编辑按钮
const editClick = () => {
  if (store.state.cartList.length) {
    store.commit("EDIT")
    emitter.emit("edit")
  } else {
    Toast.fail('空空如也')
  }
}
</script>

<style scoped lang="less">
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;

  .edit {
    font-size: 16px;
    position: absolute;
    right: 15px;
    font-weight: normal;
    margin-top: -25px;
  }

  .icon {
    position: absolute;
    left: 10px;
  }
}
</style>
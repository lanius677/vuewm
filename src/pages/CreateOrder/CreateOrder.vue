<template>
  <div class="orderContainer">
    <Header title="生成订单"></Header>
    <van-contact-card type="edit" :tel="data.tel" :name="data.name" @click="onEdit" />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import { reactive } from 'vue';


const data = reactive({
  name: '677',
  tel: '123123123',
})

const onEdit = () => {

}
</script>

<style scoped>
</style>
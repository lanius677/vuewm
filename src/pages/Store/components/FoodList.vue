<template>
  <div class="foodList" v-if="index === 0">
    <van-tree-select v-model:main-active-index="data.active" height="88vw" :items="data.items" @click-nav="navClick">
      <template #content>
        <div v-for="(i, index) in data.subItem" :key="index" class="itembg">
          <FoodAdd :item="i" :showAdd="true" :addClick="addClick" :onChange="onChange"></FoodAdd>
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>{{ foodData.content }}</div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, onMounted } from 'vue';
import FoodAdd from '@/components/FoodAdd.vue';

const { index, foodData } = defineProps(['index', 'foodData'])

interface List {
  id: number,
  num: number,
  text: string,
  children: [],
  add: boolean
}




const activeIndex = ref(0);
const data = reactive({
  active: activeIndex,
  items: [] as Array<List>,
  subItem: [] as Array<List>,
})


//数据的变化
const init = () => {
  let newList: List[] = []
  foodData?.items?.map((i: List, index: number) => {
    newList.push({
      text: i.text,
      children: i.children,
      id: i.id,
      add: i.add,
      num: i.num
    })
    if (data.active === index) {
      data.subItem = i.children
    }
  })
  data.items = newList;
}

onMounted(() => {
  init()
})


// 点击左侧的导航
const navClick = (i: number) => {
  // console.log(i);
  data.active = i
  init()
}

//切换步进器
const addClick = (i: number) => {
  data.subItem.forEach((item) => {
    if (item.id === i) {
      item.add = false
      item.num += 1
    }
  })
}

//步进器增加触发事件
const onChange = (value: number, datail: { name: number }) => {
  data.subItem.forEach((item) => {
    if (item.id === datail.name) {
      item.num = value
    }
  });
}
</script>

<style lang="less" scoped>
.foodList {
  margin-top: 20px;

  .item-bg {}
}
</style>
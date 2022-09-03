<template>
  <Header title="地址管理"></Header>
  <div class="addressContainer">
    <van-address-list
      v-model="data.chosenAddressId"
      :list="data.list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { reactive, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();


const data = reactive({
  chosenAddressId:1001,
  list: [],
});

interface List {
  id: number;
  name: string;
  tel: number | string;
  province: string;
  city: string;
  county: string;
  addressDetail: string;
  isDefault: boolean;
  areaCode: string;
  address:string;
}
// 初始化地址数据
const initAddress = () => {
  store.state.userAddress.map((item: List)=>{
    if(item.isDefault){
      data.chosenAddressId=item.id
    }
  })
  data.list = store.state.userAddress.map((item: List) => {
    return {
      id: item.id,
      name: item.name,
      tel: item.tel,
      address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
      isDefault: item.isDefault,
    };
  });
};

onMounted(() => {
  initAddress();
});

//新增地址
const onAdd = () => {
  router.push({
    path: "addressedit",
    query: {
      type: "add",
    },
  });
};

//编辑地址
const onEdit = (item:List) => {
  router.push({
    path: "./addressedit",
    query:{
      id:item.id,
      type:"change"
    }
  });
};
</script>

<style scoped></style>

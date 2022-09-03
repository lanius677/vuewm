<template>
  <div class="AddressEditContainer">
    <Header :title="address"></Header>
    <van-address-edit
      :area-list="data.areaList"
      :address-info="data.addressInfo"
      show-delete
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { Toast } from "vant";
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const router = useRouter();

const data = reactive({
  areaList: {
    province_list: {
      11000: "广东省",
      12000: "浙江省",
    },
    city_list: {
      110100: "广州市",
      110200: "深圳市",
      120100: "杭州市",
      120200: "宁波市",
    },
    county_list: {
      110101: "天河区",
      110102: "海珠区",
      120102: "上城区",
      130102: "下城区",
    },
  },
  addressInfo: {},
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
  addressInfo: string;
}

//数据初始化
const init = () => {
  store.state.userAddress.map((item: List) => {
    if (item.id === Number(route.query.id)) {
      data.addressInfo = item;
    }
  });
};

const address = computed(() => {
  return route.query.type === "add" ? "地址新增" : "地址编辑";
});

onMounted(() => {
  init();
});

//保存按钮
const onSave = (content: List) => {
  console.log(content);
  if (route.query.type === "add") {
    store.commit("ADDADRESS", content);
  }

  if (route.query.type === "change") {
    store.commit("CHANGEADDRESS", content);
  }
  Toast.success("保存成功");
  setTimeout(() => {
    router.back();
  }, 1000);
};

const onDelete = (content: List) => {
  store.commit("DETELEADDRESS",content);
  setTimeout(() => {
    router.back();
  }, 1000);
};
</script>

<style scoped></style>

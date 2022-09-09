<template>
  <div class="home">
    <div class="content">
      <!-- header区域 -->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span @click="service">广州市XXXXX</span>
          <van-icon name="arrow" />
        </div>
      </div>

      <!-- 主要内容 -->
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>
          <div class="classify">
            <div class="big-classify">
              <div v-for="(i, index) in data.homeData.big_classify" :key="index">
                <span class="iconfont" :class="i.icon" />
                <p>{{ i.name }}</p>
              </div>
            </div>
            <div class="small-classify">
              <div v-for="(i, index) in data.homeData.small_classify" :key="index">
                <span class="iconfont" :class="i.icon" />
                <p>{{ i.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <van-tabs class="van-tabs">
          <van-tab v-for="(i, index) in data.homeData.centent_nav_list" :key="index" :title="i.tab">
            <Store :storeList="i.data"></Store>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Store from './components/Store.vue';
import { getHomeData  } from '@/request/api';
import ApiDataType from '@/request/apiDataType';
import { onMounted, reactive } from "vue";
import { Toast } from 'vant';
const service = () => {
  Toast('敬请期待');
}

const data= reactive({
  homeData: {} as ApiDataType
})

//数据请求
const getHome = async () => {
  const res = await getHomeData()
  if (res.status === 200 && res.data.code === 0) {
    data.homeData = res.data.data
  }
}
onMounted(() => {
  getHome()
})
</script>

<style scoped lang="less">
:deep .van-tabs__wrap {
  border-radius: 30px;
  border: 1px solid #f5f5f5;
}

.home {
  height: 100%;
  display: flex;
  flex-flow: column;

  .content {
    flex: 1;
    overflow-y: auto;

    .main {
      margin-top: -20px;

      .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        position: relative;

        .classify {
          padding: 20px 0;

          .big-classify {
            display: flex;

            div {
              flex: 1;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;

              span {
                font-size: 50px;
                padding: 0 5px 0 0;
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
              }

              p {
                align-items: center;
                margin: 2px 3px 0 0;
                font-size: 14px;
              }
            }
          }

          .small-classify {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;

            div {
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;
              width: 20%;

              span {
                font-size: 30px;
                width: 30px;
                height: 30px;
                margin: 10px;
              }

              p {
                align-items: center;
                margin: 2px 3px 0 0;
                font-size: 12px;
              }
            }
          }
        }

        .search {
          position: relative;
          background-color: #fff;

          .search-text {
            position: absolute;
            background-color: #ffc400;
            right: -6px;
            top: 1px;
            width: 50px;
            height: 32px;
            border-radius: 16px;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
          }

          input {
            width: 100%;
            border-radius: 20px;
            border: 1px solid #ffc400;
            height: 30px;
          }
        }
      }
    }

    .header {
      display: flex;
      background-image: linear-gradient(#ffc400, #fff);
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;

      .text {
        font-size: 20px;
        font-weight: 600;
      }

      .location {
        span {
          margin: 0 5px;
        }

        font-size: 14px;
      }
    }
  }
}
</style>

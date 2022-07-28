<template>
  <div class="home">
    <div class="content">
      <!-- header区域 -->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>广州市XXXXX</span>
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
              <div v-for="(i, index) in data.big_classify" :key="index">
                <span class="iconfont" :class="i.icon" />
                <p>{{ i.name }}</p>
              </div>
            </div>
            <div class="small-classify">
              <div v-for="(i, index) in data.small_classify" :key="index">
                <span class="iconfont" :class="i.icon" />
                <p>{{ i.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <van-tabs class="van-tabs">
          <van-tab v-for="(i,index) in data.centent_nav_list" :key="index" :title="i.tab">
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
import { reactive } from "vue";
const data = reactive({
  big_classify: [
    { name: "美食", icon: "icon-xinxianguoshu_xinxianshuiguoningmeng" },
    { name: "甜点饮品", icon: "icon-xinxianguoshu_xinxianshuiguoxiangjiao" },
    { name: "超市便利", icon: "icon-xinxianguoshu_xinxianshuiguotaozi" },
    { name: "生鲜果蔬", icon: "icon-xinxianguoshu_xinxianshuiguoxiangjiao" },
    { name: "代跑买药", icon: "icon-xinxianguoshu_xinxianshucaitudou" },
  ],
  small_classify: [
    { name: "午餐", icon: "icon-xinxianguoshu_xinxianshucaibaocai" },
    { name: "买酒", icon: "icon-xinxianguoshu_xinxianshuiguoniuyouguo" },
    { name: "新鲜水果", icon: "icon-xinxianguoshu_xinxianshuiguochengzi" },
    { name: "汉堡披萨", icon: "icon-xinxianguoshu_meiweizaocanjidan" },
    { name: "休闲饮品", icon: "icon-xinxianguoshu_xinxianshuiguojuzi" },
    { name: "夜宵", icon: "icon-xinxianguoshu_meiweimianbao" },
    { name: "吐司", icon: "icon-xinxianguoshu_meiweimianbao" },
    { name: "跑腿", icon: "icon-waimai" },
    { name: "美人佳丽", icon: "icon-xinxianguoshu_xinxianshuiguotaozi" },
    { name: "全部分类", icon: "icon-xinxianguoshu_meiweimianbao" },
  ],
  centent_nav_list: [
    {
      tab: "天天神券",
      data: [
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
        {
          pic:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
          title: "隆江猪脚饭",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
      ],
    },
    {
      tab: "减配送费",
      data: [
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
      ],
    },
    {
      tab: "点评高分",
      data: [
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
      ],
    },
    {
      tab: "会员满减",
      data: [
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
        {
          pic:
            "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
          title: "鱼拿酸菜鱼",
          sales: "2888",
          price: "20",
          label: ["门店上新", "很下饭"],
        },
      ],
    },
  ],
});
</script>

<style scoped lang="less">
/deep/ .van-tabs__wrap{
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

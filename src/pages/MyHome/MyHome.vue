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
              <i class="iconfont icon-xinxianguoshu_meiweizaocanjidan
"/>
<span>美食</span>
            </div>
            <div class="small-classify"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import {reactive} from 'vue';
const data=reactive({
      big_classify: [
        { name: "美食", icon: "icon-apple-and-pear" },
        { name: "甜点饮品", icon: "icon-tianpin" },
        { name: "超市便利", icon: "icon-chaoshi" },
        { name: "生鲜果蔬", icon: "icon-shuiguo" },
        { name: "滴团买药", icon: "icon-yaopin" },
      ],
      small_classify: [
        { name: "午餐", icon: "icon-iconfonttubiaozhizuo-1" },
        { name: "买酒", icon: "icon-iconfonttubiaozhizuo-" },
        { name: "新鲜水果", icon: "icon-iconfonttubiaozhizuo-9" },
        { name: "汉堡披萨", icon: "icon-iconfonttubiaozhizuo-6" },
        { name: "休闲饮品", icon: "icon-iconfonttubiaozhizuo-8" },
        { name: "夜宵", icon: "icon-iconfonttubiaozhizuo-3" },
        { name: "吐司", icon: "icon-iconfonttubiaozhizuo-5" },
        { name: "跑腿", icon: "icon-paotuiAPP" },
        { name: "美人佳丽", icon: "icon-iconfonttubiaozhizuo-2" },
        { name: "全部分类", icon: "icon-fenlei" },
      ],
      centent_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
              title: "隆江猪脚饭",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
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
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
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
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
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
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
              title: "鱼拿酸菜鱼",
              sales: "2888",
              price: "20",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
      ],
    })

</script>

<style scoped lang="less">
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
        .search {
          position: relative;
          background-color: #fff;
          .search-text {
            position: absolute;
            background-color: #ffc400;
            right: -6px;
            top: 1px;
            width:50px;
            height: 32px;
            border-radius: 16px;
            text-align: center;
            line-height: 32px;
            font-size: 14px;
          }
          input {
            width: 100%;
            border-radius:20px;
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

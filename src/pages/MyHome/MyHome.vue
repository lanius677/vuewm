<template>
  <div class="home">
    <div class="content">
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>广州市XXXXX</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="less">
.home {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .header{
      .text{

      }
      .location{
        
      }
    }
  }
}
</style>

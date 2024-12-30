<template>
  <view class="content">
    <view class="period">
      <text>距离经期还有</text>
      <text class="highlight">26天</text>
    </view>
    <view class="id">
      <text>UKISO-1234</text>
      <text class="status" @click="navigateToPage">未连接</text>
    </view>
    <view class="add-button" @click="navigateToPage">
      <image class="add-image" src="/static/images/add.png" mode="aspectFit" />
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const navigateToPage = () => {
  uni.navigateTo({
    url: '/pages/ConnectDevice/ConnectDevice'
  })
}
</script>

<style scoped>
.content {
  position: absolute;
  margin-top: 136px;
  padding-top: 67px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
}

.period, .id {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.period {
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  width: 348px;
  height: 46px;
  padding: 11px 22px;
  margin-bottom: 31px;
}
.id {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  width: 347px;
  height: 63px;
  padding: 20px 22px 16px 21px;
}

.status {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 31px;
  opacity: 1;
  border-radius: 20px;
  background: rgba(255, 213, 197, 1);
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  vertical-align: center;
}

.add-image {
  box-sizing: border-box;
  margin-top: 259px;
  margin-left: 124px;
  width: 95px;
  height: 95px;
  background-color: #ffcccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

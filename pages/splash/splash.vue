<template>
  <view class="splash-container">
    <image class="logo" src="../../static/images/UKISO-logo.png" mode="aspectFit" />
    <button class="enter-btn" @click="handleEnter">进入</button>
  </view>
</template>

<script setup>
const handleEnter = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}
</script>

<style scoped>
.splash-container {
  position: relative;
  height: 100vh; 
  background-color: #ffffff; 
}

.logo {
  position: absolute;
  left: 54px;
  top: 151px;
  width: 278px;
  height: 193px;
  opacity: 1;
 
}


.enter-btn {
 position: absolute;
 left: 47px;
 top: 595px;
 width: 297px;
 height: 63px;
 opacity: 1;
 border-radius: 15px;
 background: rgba(255, 213, 197, 1);
 text-align: center;   
 line-height: 63px; 
 font-size: 24px;
 font-weight: 400;
 color: rgba(255, 255, 255, 1);
 
}
</style>

<template>
	
  <view class="settings-page" backUrl="/pages/FunctionPage/FunctionPage3">
	  <Nav title="设置" />
    <view class="menu-item" @click="handlePeriodDaysClick" style="margin-top: 84px;margin-left: 24px;">
      <text class="item-title">还原出厂化设置</text>
      <view class="item-right">
       
        <text class="arrow">></text>
      </view>
    </view>

    <view class="menu-item" @click="handleMenstruationDaysClick" style="margin-top: 61px;margin-left: 24px;">
      <text class="item-title">注销账号</text>
      <view class="item-right">
        
        <text class="arrow">></text>
      </view>
    </view>

    <button class="confirm-button" @click="handleConfirm" style="margin-top: 81px;margin-left: 24px;">退出登录</button>
  </view>
</template>

<script setup>
	import { ref } from 'vue';
	import Nav from '../../components/nav.vue';
const handlePeriodDaysClick = () => {
 uni.navigateTo({
 	url:'/pages/splash/splash'
 })
}

const handleMenstruationDaysClick = () => {
  uni.navigateTo({
  	url:'/pages/splash/splash'
  })
}

const handleConfirm = () => {
  uni.navigateTo({
  	url:'/pages/login/password'
  })
}
</script>

<style scoped>
.settings-page {
  
  background-color: #F5F5F5;
  min-height: 100vh;
}

.menu-item {
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 342px;
  height: 45px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 5px  rgba(0, 0, 0, 0.25);
  padding: 11px 19px 14px 19px;
  box-sizing: border-box;
}

.item-title {
  font-size: 16px;
  color: #333;
}

.item-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.item-value {
  font-size: 16px;
  color: #666;
}

.arrow {
  font-size: 16px;
  color: #999;
}

.confirm-button {
 width: 342px;
 height: 56px;
 opacity: 1;
 border-radius: 15px;
 background: rgba(255, 213, 197, 1);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 7px 125px 7px 125px;
 box-sizing: border-box;
}

.confirm-button:active {
  opacity: 0.9;
}
</style>
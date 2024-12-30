<template>
	<view class="password-login-container">
		<view class="nav-bar">
			<view class="back-btn" @tap="goBack">
				<image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
			</view>
			<text class="title">搜索设备</text>
		</view>
		<text class="lit-title">设备</text>
		<view class="id">
		  <text>UKISO-1234</text>
		  <text class="status" @tap="navigateBack">连接</text>
		</view>
		<view class="circle"></view>
	</view>
 
</template>

<script setup>
import { ref } from 'vue'


const goBack = () => {
  uni.switchTab({
  	url:'/pages/Connection/Connection'
  })
}
const navigateBack = () => {
  // 将 shouldSwitch 标识存储到缓存中
  uni.setStorageSync('shouldSwitch', true)
  
  // 返回页面1
  uni.navigateBack({
    delta: 1  // 返回上一页（页面1）
  })
}

</script>

<style scoped>

	.password-login-container {
		min-height: 100vh;
		background-color: #ffffff;
	}

	.nav-bar {
		
		display: flex;
		align-items: center;
	}

	.back-arrow {
		margin-left:18px;
		margin-top:50px;
		width: 25px;
		height: 25px;
		opacity: 1;

	}

	.title {
		margin-top: 47px;
		margin-left: 111px;
		width: 82px;
		height: 31px;
		font-size: 20px;
		/* font-weight: bold; */
		letter-spacing: 0px;
		line-height: 28.96px;
		color: rgba(0, 0, 0, 1);
	}
	   
   .lit-title{
	   display: block;
	   margin-top: 41px;
	   margin-left: 43px;
	   font-size: 16px;
	   color: rgba(0, 0, 0, 1);
   }
	
.id {
	box-sizing: border-box;
  display: flex;
  justify-content: space-between;
 
 opacity: 1;
 
 border-radius: 15px;
 background: rgba(255, 255, 255, 1);
 box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
 display: flex;
   align-items: center;  
 font-size: 16px;
 color: rgba(0, 0, 0, 1);
 width: 347px;
 height: 63px;
 padding:20px 22px 16px 21px;
 margin-top: 24px;
 margin-left: 18px;
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
.circle {
 width: 83px;
 height: 83px;
 opacity: 1;
 background: rgba(255, 213, 197, 1);
  border-radius: 50%; 
  box-shadow: 0 0 30px rgba(255, 204, 204, 0.7); 
  margin-top: 445px; 
  margin-left:148px;
}


</style>
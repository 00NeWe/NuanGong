<template>
  <view class="profile-container">
    <view class="header">
		<view class="header-container">
			<view class="avatar"></view>
			<view class="header-text">
					<text class="username">11</text>
					<text class="subtitle">加入UKISO的第20天</text>  
			</view>
		</view>  
    </view>  
	 <Content v-if="showContent" />
	 <ConnectedContent v-if="!showContent" />
  </view>
  
</template>
<script setup>
import{ref} from 'vue'
import { onShow } from '@dcloudio/uni-app'
import Content from '../../components/Content.vue' 
import ConnectedContent from '../../components/ConnectedContent.vue' 
const showContent = ref(true)
// 页面跳转回来后切换组件的状态
const toggleComponent = () => {
  showContent.value = !showContent.value // 切换显示的组件
}
onShow(() => {
  const shouldSwitch = uni.getStorageSync('shouldSwitch') // 从缓存中读取是否需要切换组件
  if (shouldSwitch !== undefined) {
    showContent.value = !shouldSwitch  // 根据缓存中的值切换组件
    uni.removeStorageSync('shouldSwitch')  // 清除缓存，避免影响后续返回
  }
})
</script>
<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
 
}
.header{
	height: 180px;
	background: linear-gradient(to bottom,rgba(255, 213, 197, 1), rgba(255, 255, 255, 1)); 
}
.header-container {
  margin-top: 70px;
  margin-left: 28px;
  display: flex;
  align-items: center;

  border-radius: 10px;
  width: 80%;
}

.avatar {
  width: 36px;
  height: 36px;
  background-color: #000;
  border-radius: 50%;
  margin-right: 12px;
}
.header-text{
	display: flex;
	flex-direction: column;
	font-size: 12px;
}


</style>
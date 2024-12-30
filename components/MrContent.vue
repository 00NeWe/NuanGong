<template>
  <view class="content">
    <view class="top" style="margin-left: 14px;">
		<text>开始时间</text>
		<text>经期天数</text>
		<text>周期天数</text>
		<text>经痛程度</text>
	</view>
	<view class="lev-line"></view>
	<view class="top top2">
		<text>2024-08-12</text>
		<text style="margin-right: 30x;">6</text>
		<text>28</text>
		<text>LV2</text>
	</view>
	<view class="lev-line2"></view>
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
  margin-top: 193px;
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 647px;
  border-radius: 30px;
 
  background: rgba(255, 255, 255, 1);
  padding-left: 21px;
  padding-right: 21px;
  overflow: hidden;
  box-sizing: border-box;
}
.top{
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
}
.top2{
    padding-right: 16px;
	margin: 28px 0;
}
.top text{
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 20.27px;
	color: rgba(0, 0, 0, 1);
}
.lev-line{
	width: 348px;
	height: 0px;
	opacity: 1;
	border: 1px solid rgba(166, 166, 166, 1);
}
.lev-line2{
	width: 348px;
	height: 0px;
	opacity: 1;
	border: 1px solid rgba(229, 229, 229, 1);
}

</style>

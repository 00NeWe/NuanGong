<template>
  <view class="profile-container"> 
    <view class="header">
		<view class="nav-bar">
			<view class="back-btn" @tap="goBack">
				<image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
			</view>
			<text class="title">经期记录</text>
		</view>
		<view class="header-container">
			<view class="top" >
				<text>累记记录周期</text>
				<text>平均经期天数</text>
				<text>平均月经天数</text>

			</view>
			
			<view class="bottom">
				
				<text >7</text>
				<text>28</text>
				<text>7</text>
			</view>
		</view>  
    </view>  
	 <MrContent />
  </view>
  
</template>
<script setup>
import{ref} from 'vue'
import MrContent from '../../components/MrContent.vue' 


const goBack = () => {
	uni.switchTab({
	  url: '/pages/FunctionPage/FunctionPage2'
	});
}

</script>
<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
 
}
.nav-bar {

		display: flex;
		align-items: center;
	}

	.back-arrow {
		margin-left: 18px;
		margin-top: 50px;
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
.header{
	height: 243px;
	background: rgba(255, 213, 197, 0.25);}
	
.header-container {
  left: 0px;
margin-top: 19px;
  display: flex;
  flex-direction: column;
width: 390px;
height: 78px;
opacity: 1;
background: rgba(255, 213, 197, 0.35);

}

.top{
	display: flex;
	justify-content: space-between;
	margin-top: 12px;
	margin-left: 38px;
	margin-right: 39px;
}

.top text{
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 20.27px;
	color: rgba(0, 0, 0, 1);
}
.bottom{
	display: flex;
		justify-content: space-between;
		margin-top: 6px;
		margin-bottom: 15px;
	margin-left:75px;
	margin-right: 70px;
}
.bottom text{
	font-size: 16px;
	font-weight: 900;
	letter-spacing: 0px;
	line-height: 23.17px;
	color: rgba(0, 0, 0, 1);
}
</style>
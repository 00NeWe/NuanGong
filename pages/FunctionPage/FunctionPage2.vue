<template>
	<div class="function-page-2">
		<header class="header"><text>今天9月10日</text>
			<image class="add-image" src="/static/images/日历.png" mode="aspectFit" @tap="goToRecord"/>
		</header>
		<div class="calendar">
			<div class="weekday" v-for="day in weekdays" :key="day">{{ day }}</div>
			<div class="day" v-for="(n, index) in 7" :key="n" :data-index="index" :class="{ active: n <= 2 }"></div>
		</div>
		<div class="circle-container">
			<div class="circle">
				<div class="text-content">
					<span class="jl">距离经期来到还有</span><br>
					<span class="highlight">26</span>
					<br>
					<span class="zq">周期 28</span>
				</div>
			</div>
		</div>
		<view class="period-prediction-card" style="margin-top: 10px;" @tap="goToRecord">
		    <view class="card-header">
		        <text class="title">预测经期时间</text>
		    </view>
		    <view class="date-section">
		        <view class="date-range">
		            <view>10月5日—10月12日</view>
		            <view class="duration">
		                <text>共7天</text>
		                <text class="arrow">></text>
		            </view>
		        </view>
		    </view>
		    <view class="reminder-section1">
		        <text>开启提醒</text>
		        <switch 
		            :checked="isReminderOn" 
		            @change="toggleReminder" 
		            @tap.stop 
		            color="rgba(255, 213, 197, 1)" 
		            class="reminder-switch" 
		        />
		    </view>
		</view>
		<view class="period-prediction-card" @tap="goToPeriod">
			<view class="card-header">
				<text class="title">周期</text>
				<text class="arrow">></text>
			</view>

			<view class="date-section">
				<view class="date-range">
					<view>累计记录周期</view>
					<view class="duration">
						<text>平均周期天数</text>
					</view>
					<view>平均月经天数</view>
				</view>
			</view>

			<view class="reminder-section2">
				<text>2</text>
				<text>28</text>
				<text>7</text>
			</view>
		</view>

	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const isReminderOn = ref(false)

	const toggleReminder = (event) => {
		isReminderOn.value = event.detail.value
	}
	const weekdays = ['五', '六', '日', '一', '二', '三', '四'];
	const goToRecord = () => {
		uni.navigateTo({
			url: '/pages/riliye/riliye'
		})
	}
	const goToPeriod = () => {
		uni.navigateTo({
			url: '/pages/MenstrualRecord/MenstrualRecord'
		})
	}
	
</script>

<style scoped>
	.function-page-2 {
		/* background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 213, 197, 1) 100%); */

	}

	.header {
		height: 136px;
		opacity: 1;
		background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 213, 197, 1) 100%);
		padding-top: 85px;
		padding-left: 121px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		box-sizing: border-box;
	}

	.header text {

		font-size: 24px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 34.75px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
	}

	.header image {

		margin-left: 57px;
		width: 27.71px;
		height: 27.71px;
		opacity: 1;

	}

	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 5px;
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 17.38px;
		color: rgba(0, 0, 0, 1);
		padding-left: 18px;
		padding-right: 18px;
	}

	.weekday,
	.day {

		text-align: center;

	}

	.day[data-index="0"]::after,
	.day[data-index="1"]::after {
		content: '';
		position: absolute;
		top: 5px;
		right: 5px;
		width: 32px;
		height: 32px;
		background-color: rgba(255, 133, 128, 1);
		border-radius: 50%;
		opacity: 0.7;
	}

	.day {
		position: relative;
		width: 42px;
		height: 71px;
		border-radius: 21px;
		background: rgba(166, 166, 166, 0.25);
		margin-top: 7px;
	}


	.day[data-index="3"] {
		margin-top: 0px;
		height: 85px;
	}

	.period-info {
		background-color: red;
	}

	.period-info,
	.prediction,
	.stats {
		background-color: white;
		border-radius: 10px;
		padding: 15px;
		margin-top: 20px;
	}

	.days-left {
		font-size: 36px;
		font-weight: bold;
		color: #FFC0CB;
		text-align: center;
	}

	button {
		background-color: #FFC0CB;
		border: none;
		color: white;
		padding: 5px 15px;
		border-radius: 15px;
		margin-top: 10px;
	}

	.stat-item {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.circle-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 230px;
	
	}

	.circle {
		width: 180px;
		/* 圆形的直径 */
		height: 180px;
		background: conic-gradient(circle, rgba(40, 186, 108, 0.2) 0%, rgba(255, 255, 0, 0.2) 100%);
		border-radius: 50%;
		/* 使元素变成圆形 */
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		box-shadow: 0 0 60px rgba(208, 243, 222, 1);

	}

	.text-content {
		text-align: center;
		font-family: Arial, sans-serif;
		color: #333;
	}

	.jl {
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}

	.highlight {
		font-size: 36px;
		font-weight: 900;
		letter-spacing: 0px;
		line-height: 52.13px;
		color: rgba(0, 0, 0, 1);
	}

	.zq {
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 17.38px;
		color: rgba(128, 128, 128, 1);
	}

	.period-prediction-card {
		box-sizing: border-box;
		margin-top: 18px;
		margin-left: 41px;
		padding: 15px 16px;
		width: 308px;
		height: 120px;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 5px 5px rgba(166, 166, 166, 0.25);

	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}

	/* .title {
  font-size: 32rpx;
  font-weight: 500;
  color: #333333;
} */

	.date-section {

		margin-bottom: 30rpx;
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 17.38px;
		color: rgba(0, 0, 0, 1);
	}

	.date-range {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28rpx;
		color: #333333;
	}

	.duration {
		display: flex;
		align-items: center;
		color: #666666;
	}

	.arrow {
		margin-left: 10rpx;
		color: #999999;
	}

	.reminder-section1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 17.38px;
		color: rgba(0, 0, 0, 1);
	}

	.reminder-switch {
		transform: scale(0.9);
	}

	.reminder-section2 {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 16px;
		font-weight: 900;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}
</style>
<template>
	<view class="rili-container">
		<view class="nav-bar">
			<view class="back-btn" @tap="goBack">
				<image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
			</view>
			<text class="title">记录</text>
		</view>
		<period-calendar />
		<view class="reminder-section1">
			<text>月经是否来了</text>
			<switch :checked="isReminderOn" @change="toggleReminder" color="rgba(255, 213, 197, 1)" class="reminder-switch" />
		</view>
		<usage-stats />
	</view>
</template>

<script setup>
import { ref } from 'vue'
import PeriodCalendar from '../../components/PeriodCalendar.vue'
import UsageStats from '../../components/UsageStats.vue'

const isReminderOn = ref(false)

const toggleReminder = (event) => {
	isReminderOn.value = event.detail.value
}

const goBack = () => {
	uni.switchTab({
	  url: '/pages/FunctionPage/FunctionPage2'
	});
}
</script>
<style scoped>
	.rili-container{
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
	.reminder-section1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	 width: 365px;
	 height: 58px;
	 opacity: 1;
	 border-radius: 20px;
	 background: rgba(255, 255, 255, 1);
	 box-shadow: 0px 2px 4px  rgba(166, 166, 166, 0.25);
	 margin-top: 425px;
	 margin-left: 13px;
	 padding-left: 22px;
	 padding-right: 9px;
	 box-sizing: border-box;
	}
	.reminder-section1{
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}
	
	.reminder-switch {
		
	  transform: scale(0.9);
	}
</style>
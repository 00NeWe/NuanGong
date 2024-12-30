<template>
	<view class="profile-container">
		<view class="header">
			<view class="header-container">
				<view class="avatar"></view>
				<view class="header-text" style="font-size: 12px;">
					<text class="username">11</text>
					<text class="subtitle" style="width: 130px;font-size: 12px;">加入UKISO的第20天</text>
				</view>
				<image class="write-icon" src="../../static/images/write.png" @tap="gotoEdit"></image>
			</view>
		</view>
		<view class="content">
			<view class="option-card">
			     <view class="settings-card" @click="gotoSettingProfile">
			     	<view class="card-content">
			     		<view class="icon-wrapper">
			     			<image src="/static/images/personal-profile.png" class="icon" />
			     		</view>
			     		<view class="text-content">
			     			<text class="title">个人资料设置</text>
			     			<text class="subtitle">设置个人定制化</text>
			     		</view>
			     	</view>
			     </view>
			     <view class="reminder-card" @click="gotoReminders">
			     	<view class="card-content">
			     		<view class="icon-wrapper">
			     			<image src="/static/images/remind.png" class="icon" />
			     		</view>
			     		<view class="text-content">
			     			<text class="title">我的提醒</text>
			     			<text class="subtitle">设置提醒时间</text>
			     		</view>
			     	</view>
			     </view>
			</view>	
			<view class="set-list"><SettingsList /></view>
			
		</view>
		
	</view>

</template>
<script setup>
	import {
		ref
	} from 'vue'
	import SettingsList from '../../components/SettingList.vue'
	const gotoSettingProfile = () => {
		uni.navigateTo({
			url: '/pages/Profile/Profile'
		})
	}
	const gotoReminders = () => {
		uni.navigateTo({
			url: '/pages/reminders/reminders'
		})
	}
	const gotoEdit = () => {
		uni.navigateTo({
			url: '/pages/SettingProfile/SettingProfile'
		})
	}
</script>
<style scoped>
	.profile-container {
		display: flex;
		flex-direction: column;

	}

	.header {
		height: 190px;
		background: linear-gradient(to bottom, rgba(255, 213, 197, 1), rgba(255, 255, 255, 1));
	}

	.header-container {
		margin-top: 70px;
		margin-left: 28px;
		display: flex;
		align-items: center;

		border-radius: 10px;
		width: 84%;
	}

	.avatar {
		width: 36px;
		height: 36px;
		background-color: #000;
		border-radius: 50%;
		margin-right: 12px;
	}

	.header-text {
		display: flex;
		flex-direction: column;
		font-size: 12px;
	}
 
	.write-icon {
		width: 25px;
		height: 25px;
		margin-right: 0px;
		margin-left: 120px;
	}
    .content{
		top:147px;
		position: absolute;
		width: 390px;
		height: 708px;
		opacity: 1;
		border-radius: 30px;

		background: rgba(255, 255, 255, 1);
	}
	.option-card{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 28px;
		margin-bottom: 31px;
	}
	.settings-card {
		margin-right: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 157px;
		height: 64px;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 2px 5px 3px rgba(166, 166, 166, 0.25);
	}

	.card-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}

	.icon-wrapper {
		width: 24px;
		height: 24px;
	}

	.icon {
		width: 100%;
		height: 100%;
	}

	.reminder-card {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 157px;
		height: 64px;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 5px 3px rgba(166, 166, 166, 0.25);
	}

	.card-content {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.icon-wrapper {
		width: 24px;
		height: 24px;
	}

	.icon {
		width: 100%;
		height: 100%;
	}

	.text-content {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}

	.subtitle {
		font-size: 10px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 14.48px;
		color: rgba(128, 128, 128, 1);
	}
	.set-list{
		margin-left: 28px;
	}
</style>
<template>
	<Nav :title="pageTitle" backUrl="/pages/FunctionPage/FunctionPage3"/>
	<view class="setting-container">
		<text class="profile-text">资料修改</text>
		<view class="settings-list">
			<view v-for="item in menuItems" :key="item.id" class="menu-item" @click="navigateTo(item.url)">
				<view class="item-content">
					<view class="left">
						<text class="title">{{ item.title }}</text>

					</view>
					<view class="right-flex">
					
						<view v-if="item.title === '头像'" class="avatar-placeholder"></view>

					
						<text v-if="item.title === '昵称'" class="nickname">11</text>
						<image v-if="item.title !== '头像'" src="/static/images/right-arrow.png" class="arrow" />
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import Nav from '../../components/nav.vue';

	const pageTitle = ref('个人信息');

	const menuItems = [{
			id: 1,
			title: '头像',

		},
		{
			id: 2,
			title: '昵称',

		},
		{
			id: 3,
			title: '修改密码',

			url: '/pages/login/reset'
		}
	];

	// 处理点击事件
	const navigateTo = (url) => {
		uni.navigateTo({
			url
		});
	};
</script>

<style>
	.setting-container {
		position: absolute;
		
		width: 100%;
		height: 100%;
	}

	.profile-text {
		font-size: 16px;
		font-weight: 400;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
		margin-top: 50px;
		margin-left: 24px;
		display: block;
	}

	.settings-list {
		margin-top: 17px;
		margin-left: 22px;
		width: 345px;
		height: 240px;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	}

	.menu-item {
		position: relative;
		/* 确保伪元素相对定位 */
		height: 72px;
		padding: 14px 20px;
		box-sizing: border-box;

	}


	.menu-item::after {
		content: '';
		position: absolute;
		left: 24;
		bottom: 0;
		width: 86%;
		height: 1px;
		background-color: rgba(229, 229, 229, 1);
	}

	.item-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		padding-right: 10px;
	}

	.left {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-grow: 1;
	}

	.icon {
		width: 24px;
		height: 24px;
	}

	.title {
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}

	.arrow {
		width: 20px;
		height: 20px;

	}

	.avatar-placeholder {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: black;
		margin-left: 12px;
		margin-right: 5px;
	}

	.nickname {
		margin-left: 12px;
		color: rgba(0, 0, 0, 0.6);
		font-size: 14px;
	}

	.right-flex {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
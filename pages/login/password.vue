<template>
	<view class="password-login-container">
		<view class="nav-bar">
			<view class="back-btn" @tap="goBack">
				<image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
			</view>
			<text class="title">账号登录</text>
		</view>
		<view class="logo"> 
		<image  src="/static/images/ukiso-logo.png" mode="aspectFit" />
		</view>
		<view class="form">
			<text class="text-input">账号</text>
			<input type="text" v-model="account" placeholder="请输入账号" class="input" />
			<view class="form-pwd">
				<text class="text-input">密码</text>
				<input type="password" v-model="password" placeholder="请输入密码" class="input" />
			</view>
			
			<button class="login-btn" @click="handleLogin">登录</button>
			
		</view>
		<text class="forgot-pwd" @click="goToForgotPassword">忘记密码</text>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const account = ref('')
	const password = ref('')

	const goBack = () => {
		uni.navigateBack()
	}

	const goToForgotPassword = () => {
		uni.navigateTo({
			url: '/pages/login/reset'
		})
	}
	const handleLogin = () => {
		uni.switchTab({
		  url: '/pages/Connection/Connection',  // TabBar 页面的路径
		});
	
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

	.logo {
		margin-left: 123px;
		margin-top: 29px;
		
		
	}
    .logo image{
		width: 145px;
		height: 101px;
		display: block;
	}
	.form {
		margin-left: 39px;
		margin-top: 22px;
	}
    .text-input{
		margin-left: 5px;
		width: 69px;
		height: 26px;
		font-size: 16px;
		/* font-weight: bold; */
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
	}
	.input {
		width: 314px;
		height: 54px;
		opacity: 1;
		border-radius: 10px;
		background: rgba(255, 213, 197, 0.25);
		text-indent: 39px;
	}
    .form-pwd{
		margin-top: 24px;
	}
	

	.login-btn {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
		 display: flex;
		 justify-content: center; 
		 align-items: center;
         margin-top: 50px;
		 width: 313px;
		 height: 68px;
		 opacity: 1;
		 border-radius: 10px;
		 background: rgba(255, 213, 197, 1);
		border: 6px solid #fde7e1;
		
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 34.75px;
		color: rgba(255, 255, 255, 1);
	}
	.forgot-pwd {
		text-align: center;
		display: block;
		/* margin-left: 132px; */
		line-height: 17.38px;
		color: rgba(128, 128, 128, 1);
		font-size: 12px;
        margin-top: 19px;
	}
	
</style>
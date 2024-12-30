<template>
	<view class="password-login-container">
		<view class="nav-bar">
			<view class="back-btn" @tap="goIndex">
				<image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
			</view>
			<text class="title">忘记密码</text>
		</view>
		
		<view class="form">
			<text class="text-input">账号</text>
			<input type="text" v-model="account" placeholder="请输入账号" class="input" />
			<view class="form-pwd">
				<text class="text-input">验证码</text>
				<view class="code-container">
				    <input type="text" v-model="verificationCode" placeholder="请输入验证码" class="input" />
				    <text class="get-code" @click="handleGetCode">获取验证码</text>
				</view>
			</view>	
			<view class="form-pwd">
				<text class="text-input">密码</text>
				<input type="password" v-model="password" placeholder="请设置新的密码" class="input" />
			</view>	
			<view class="form-pwd">
				<text class="text-input">确认密码</text>
				<input type="password" v-model="password" placeholder="请再次确认新的密码" class="input" />
			</view>	
			<button class="login-btn" @click="handleReset">确认修改</button>		
		</view>
		
	</view>
 
</template>

<script setup>
import { ref } from 'vue'

const account = ref('')
const verifyCode = ref('')
const password = ref('')
const confirmPassword = ref('')

const goIndex = () => {
  uni.navigateTo({
  	url:'/pages/login/index'
  })
}

const getVerifyCode = () => {
  if (!account.value) {
    uni.showToast({
      title: '请输入账号',
      icon: 'none'
    })
    return
  }

}

const handleReset = () => {
  uni.navigateTo({
  	url: '/pages/login/password'
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
		margin-left: 38px;
		margin-top: 56px;
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
	.code-container {
	  display: flex;
	  align-items: center;
	  width: 314px;
	  background: rgba(255, 213, 197, 0.25);
	  border-radius: 10px;
	  height: 54px;
	}
	
	.code-container .input {
	  flex: 1;
	  height: 100%;
	  border: none;
	  outline: none;
	  background: transparent;
	  text-indent: 39px;
	}
	
	.get-code {
	  color: rgba(252, 144, 169, 1);
	  font-size: 12px;
	  /* font-weight: bold; */
	  cursor: pointer;
	  margin-right: 36px;
	  border-radius: 10px;
	}

	.login-btn {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
		 display: flex;
		 justify-content: center; 
		 align-items: center;
         margin-top: 68px;
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

</style>
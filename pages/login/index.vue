<template>
  <view class="login-container">
    <image class="logo" src="/static/images/UKISO-logo.png" mode="aspectFit" />  
      <input 
        type="number" 
        v-model="phone" 
        placeholder="请输入手机号码"
        class="input"
      />  
    <button class="login-btn" @click="handleLogin">登录</button>  
      <text @click="goToPasswordLogin" class="option-text-account">账号密码登录</text>
      <text @click="goToPhoneLogin" class="option-text-phone">本机号码一键登录</text>    
  </view>
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')

const goToPasswordLogin = () => {
  uni.navigateTo({
    url: '/pages/login/password'
  })
}

const goToPhoneLogin = () => {
  uni.navigateTo({
    url: '/pages/login/phone'
  })
}

const handleLogin = () => {
uni.switchTab({
  url: '/pages/Connection/Connection',  // TabBar 页面的路径
});

}
</script>

<style scoped>
.login-container {
position: relative;
  height: 100vh; 
  background-color: #ffffff; 
}

.logo {
  position: absolute;
  left: 93px;
  top: 129px;
  width: 212px;
  height: 147px;
  opacity: 1;
}
.input {
  position: absolute;
  text-indent: 40px;
  left: 39px;
  top: 276px;
  width: 314px;
  height: 54px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(255, 213, 197, 0.25);
}

.login-btn {
 position: absolute;
 display: flex;
 justify-content: center; 
 align-items: center;
 left: 45px;
 top: 442px;
 width: 301px;
 height: 54px;
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

.option-text-account{
	position: absolute;
	left: 158px;
	top: 523px;
	width: 74px;
	height: 18px;
	opacity: 1;
	
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 17.38px;
	color: rgba(0, 0, 0, 1);
	text-align: left;
	vertical-align: top;
}
.option-text-phone{
	position: absolute;
	left: 147px;
	top: 568px;
	width: 96px;
	height: 15px;
	opacity: 1;
	
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 17.38px;
	color: rgba(0, 0, 0, 1);
	text-align: left;
	vertical-align: top;

}
</style>
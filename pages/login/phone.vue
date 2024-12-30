<template>
  <view class="container">
    <view class="header">
      <view class="back-btn" @tap="goBack">
         <image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
      </view>
    </view>

    <view class="content">
      <text class="title">请输入验证码</text>
      <text class="subtitle">六位数验证码已发送到您的手机</text>
      <text class="phone">手机号：{{ phoneNumber }}</text>
    </view>

 
    <view class="code-input-container">
      <view 
        v-for="(digit, index) in 6" 
        :key="index"
        class="code-input-box"
        :class="{ 'active': currentFocusIndex === index }"
      >
        <text class="code-digit">{{ verificationCode[index] || '' }}</text>
      </view>
      <input
        type="number"
        maxlength="6"
        class="hidden-input"
        v-model="verificationCode"
        @input="handleInput"
        @focus="handleFocus"
      />
    </view>

 
    <button 
      class="resend-btn" 
     
      @tap="handleResend"
    >
     重新发送
    </button>
  </view>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phoneNumber = ref('+8612345678900')
const verificationCode = ref('')
const currentFocusIndex = ref(0)
const countdown = ref(0)
let timer = null

const handleInput = (e) => {
  verificationCode.value = e.detail.value.slice(0, 6)
  currentFocusIndex.value = verificationCode.value.length
  
  if (verificationCode.value.length === 6) {
    // TODO: Handle verification code submission
    console.log('Verification code:', verificationCode.value)
  }
}

const handleFocus = () => {
  currentFocusIndex.value = verificationCode.value.length
}

const startCountdown = () => {
  countdown.value = 60
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

const handleResend = () => {

  startCountdown()
}

const goBack = () => {
 
    uni.navigateTo({
    	url:'/pages/login/index'
    })
  
}

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.container {
  
 display: flex;
 flex-direction: column;
  background-color: #ffffff;
  min-height: 100vh;
}

.header {
  
  margin-left: 18px;
  margin-top: 50px;
}

.back-btn {

}

.back-arrow {	
width: 25px;
height: 25px;
opacity: 1;

}

.content {
  
  margin-left: 39px;
  margin-top: 48px;
  

}

.title {
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}

.subtitle {
  
  display: block;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}

.phone {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
  display: block;
}

.code-input-container {
  display: flex;
  width: 287px;
  justify-content: space-between;
  margin-left: 52px;
  margin-top: 49px;
  margin-bottom: 40px;
  position: relative;
}

.code-input-box {
  width: 42px;
  height: 53px; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 213, 197, 0.25);
}



.code-digit {
  font-size: 24px;
  color: #333;
}

.hidden-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
}

.resend-btn {
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


</style>
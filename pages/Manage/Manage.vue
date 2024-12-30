<template>
	<Nav title="添加亲友" backUrl="/pages/reminders/reminders" />
  <view class="page-wrapper">
    
    <scroll-view class="form-page" scroll-y>
      <view class="form-content">
        <view class="form-header">请填写个人信息，以便准确的信息推送</view>

        <!-- 头像sc -->
        <view class="avatar-section" @tap="handleAvatarClick">
          <view class="avatar-circle">
            <image src="/static/images/user.png" class="avatar-image"></image>
          </view>
          <text class="avatar-text">点击更换头像</text>
        </view>

        <!-- 个人信息 -->
        <view class="form-group">
          <text class="label">昵称</text>
          <input type="text" v-model="formData.nickname" class="input-field" placeholder="请输入"  />
        </view>

        <view class="form-group">
          <text class="label">关系</text>
          <input type="text" v-model="formData.relationship" class="input-field" placeholder="请输入" />
        </view>

        <view class="form-group">
          <text class="label">手机号码</text>
          <view class="phone-input-group">
            <input type="number" v-model="formData.phone" class="input-field phone-input" placeholder="请输入"
              maxlength="11" />
            <view class="verify-button" @tap="handleSendVerifyCode" :class="{ 'disabled': !isPhoneValid || cooldown > 0 }">
              {{ cooldown > 0 ? `${cooldown}s` : '验证码' }}
            </view>
          </view>
        </view>

        <view class="form-group">
          <text class="label">验证码</text>
          <input type="number" v-model="formData.verifyCode" class="input-field" placeholder="请输入" maxlength="6" />
        </view>

        <!-- 提交啊那妞 -->
        <button class="submit-button" @tap="handleSubmit">确定</button>

      </view>
    </scroll-view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import Nav from '../../components/nav.vue';

const avatarUrl = ref('')
const cooldown = ref(0)
const formData = ref({
  nickname: '',
  relationship: '',
  phone: '',
  verifyCode: ''
})

const isPhoneValid = computed(() => {
  return /^1[3-9]\d{9}$/.test(formData.value.phone)
})

const handleAvatarClick = async () => {
  try {
    const res = await uni.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera']
    })
    avatarUrl.value = res.tempFilePaths[0]
  } catch (error) {
    uni.showToast({
      title: '选择图片失败',
      icon: 'none'
    })
  }
}

const handleSendVerifyCode = () => {
  if (!isPhoneValid.value) {
    uni.showToast({
      title: '请输入正确的手机号',
      icon: 'none'
    })
    return
  }

  cooldown.value = 60
  const timer = setInterval(() => {
    cooldown.value--
    if (cooldown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)

  uni.showToast({
    title: '验证码已发送',
    icon: 'success'
  })
}

const handleSubmit = () => {
  uni.navigateTo({
  	url:'/pages/reminders/reminders'
  })
}

const handleDelete = () => {
  uni.showModal({
    title: '提示',
    content: '确定要删除该亲友吗？',
    success: (res) => {
      if (res.confirm) {

        uni.showToast({
          title: '删除成功',
          icon: 'success'
        })
      }
    }
  })
}
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.form-page {
  flex: 1;
  background-color: #FFFFFF;
}

.form-content {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 59px;
  
}

.form-header {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 20px;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 27px;
  
}

.avatar-circle {
  width: 46px;
  height: 46px;
  opacity: 1;
  background: rgba(255, 213, 197, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
}

.avatar-image {
  width: 16.97px;
  height: 19.92px;
  opacity: 1;
}

.avatar-text {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
}

.form-group {
  margin-bottom: 25px;
}
.label {
  display: block;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 8px;
}

.input-field {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #E5E5E5;
  font-size: 16px;
  color: #333;
}

.phone-input-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.phone-input {
  flex: 1;
}

.verify-button {
  width: 83px;
  height: 37px;
  opacity: 1;
  border-radius: 20px;
 background: rgba(255, 213, 197, 1);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}



.submit-button {
  width: 335px;
  height: 61px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 213, 197, 1);
  color:  rgba(0, 0, 0, 1);

  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 138px;
}

.delete-link {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
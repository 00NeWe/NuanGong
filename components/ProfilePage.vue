<template>
  <div class="profile-page">
    <div class="nav-bar">
      <button @click="goBack" class="back-btn">＜</button>
      <h2>个人信息</h2>
    </div>
    <div class="profile-form">
      <div class="form-item">
        <label>头像</label>
        <div class="avatar-container">
          <img src="/placeholder.svg" alt="User Avatar" class="avatar" />
          <span class="change-avatar">更换头像</span>
        </div>
      </div>
      <div class="form-item">
        <label>昵称</label>
        <input type="text" v-model="nickname" />
      </div>
      <div class="form-item">
        <label>修改密码</label>
        <button @click="changePassword" class="change-password-btn">></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nickname = ref('11');

const goBack = () => {
  router.back();
};

const changePassword = () => {

};
</script>

<style scoped>
.profile-page {
  padding: 20px;
}

.nav-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.back-btn {
  background: none;
  border: none;
  font-size: 24px;
  margin-right: 15px;
}

.profile-form {
  background-color: white;
  border-radius: 10px;
  padding: 15px;
}

.form-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #F0F0F0;
}

.form-item:last-child {
  border-bottom: none;
}

.avatar-container {
  display: flex;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 15px;
}

.change-avatar {
  color: #FFC0CB;
}

input {
  border: none;
  text-align: right;
}

.change-password-btn {
  background: none;
  border: none;
  font-size: 18px;
}
</style>
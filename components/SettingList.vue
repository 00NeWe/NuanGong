<template>
  <view class="settings-list">
    <view 
      v-for="item in menuItems" 
      :key="item.id"
      class="menu-item"
      @click="navigateTo(item.url)"
    >
      <view class="item-content">
        <view class="left">
          <image :src="item.icon" class="icon" />
          <text class="title">{{ item.title }}</text>
        </view>
        <image src="/static/images/right-arrow.png" class="arrow" />
      </view>
    </view>
  </view>
</template>

<script setup>
const menuItems = [
  {
    id: 1,
    title: '设置',
    icon: '/static/images/setting.png',
    url: '/pages/Setting/Setting'
  },
  {
    id: 2,
    title: '操作指南',
    icon: '/static/images/operation.png',
	url: '/pages/zhinan/zhinan'

  },
  {
    id: 3,
    title: '关于我们',
    icon: '/static/images/about.png',
    url: '/pages/About/About'
  }
]

const navigateTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style scoped>
.settings-list {
  width: 328px;
  height: 165px;
  opacity: 1;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 3px rgba(166, 166, 166, 0.25);
}

.menu-item {
	 position: relative; 
  padding: 14px 20px;
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
}

.left {
  display: flex;
  align-items: center;
  gap: 12px;
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
</style>
<template>
  <view class="nav-bar">
    <view class="back-btn" @tap="handleBack">
      <image class="back-arrow" src="/static/arrow.png" mode="aspectFit" />
    </view>
	<view class="auto-wi">
		<text class="title" style="font-size: 20px;">{{ title }}</text>
	</view>
    
  </view>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  backUrl: {
    type: String,
    default: '' // 默认为空，为空时执行返回上一页
  }
});

const handleBack = () => {
  if (props.backUrl) {
    // 判断是否为TabBar页面
    if (isTabBarUrl(props.backUrl)) {
      // 使用uni.switchTab跳转TabBar页面
      uni.switchTab({
        url: props.backUrl
      });
    } else {
      // 如果是普通页面使用navigateTo
      uni.navigateTo({
        url: props.backUrl
      });
    }
  } else {
    // 没有传入URL则返回上一页
    uni.navigateBack();
  }
};

// 判断URL是否为TabBar页面
const isTabBarUrl = (url) => {
  const tabBarPages = ['/pages/Connection/Connection', '/pages/FunctionPage/FunctionPage2', '/pages/FunctionPage/FunctionPage3'];  // 这里列出你的TabBar页面的路径
  return tabBarPages.includes(url);
};
</script>

<style>
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
.auto-wi{
	width: 267px;
	display: flex;
	justify-content: center;
}
.title {
  margin-top: 47px;
  width: auto;
  height: 31px;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
</style>

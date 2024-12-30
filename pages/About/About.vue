<template>
	<view>
			<Nav :title="pageTitle" :backUrl="backUrl"/>
			<image src="../../static/images/UKISO-logo.png" class="logo"></image>
			<view class="settings-list">
			    <view 
			      v-for="(item, index) in settings" 
			      :key="index" 
			      class="settings-item" 
			      @click="item.title === '意见反馈' ? goFeedback() : null"
			    >
			      <text>{{ item.title }}</text>
			      <image src="/static/images/right-arrow.png" class="arrow-icon" />
			    </view>
			  </view>
		</view>
</template>

<script setup>
	import { ref } from 'vue';
	import Nav from '../../components/nav.vue';
	
	const pageTitle = ref('关于我们');
	const backUrl = ref('/pages/FunctionPage/FunctionPage3');
	const settings = ref([
	  { title: '用户协议'},
	  { title: '隐私政策' },
	  { title: '第三方共享个人信息清单' },
	  { title: '版本号'},
	  { title: '意见反馈'}
	]);
	
	// 意见反馈跳转方法
	function goFeedback() {
	  uni.navigateTo({
	    url: '/pages/PwdReset/PwdReset',
	    fail: (err) => {
	      console.error('Navigation failed:', err);
	      uni.showToast({
	        title: '页面不存在',
	        icon: 'none'
	      });
	    }
	  });
	}
</script>

<style>
.settings-list {
  display: flex;
  flex-direction: column;
 width: 323px;
 height: 304px;
 opacity: 1;
 border-radius: 20px;
 background: rgba(255, 255, 255, 1);
 box-shadow: 0px 3px 5px 1px rgba(255, 213, 197, 1);
 margin-left: 31px;
 margin-top: 36px;
}

.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 22px;
  height: 60px;
 
}

.arrow-icon {
  width: 20px;
  height: 20px;
}
.logo{
	width: 278px;
	height: 193px;
	margin-top: 40px;
	margin-left: 56px;
}
</style>

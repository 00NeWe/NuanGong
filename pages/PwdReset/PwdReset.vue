<template>
	<view>
		<Nav :title="pageTitle" backUrl="/pages/About/About" />
		<view class="feedback-textarea-container">
		    <textarea
		      v-model="feedbackText"
		      class="feedback-textarea"
		      placeholder="您的每一条意见对我们都至关重要，将帮助我们不断改进产品，为您提供更好的服务体验。期待您的宝贵反馈！"
		      placeholder-class="placeholder-style"
		      maxlength="500"
		    />
		  </view>
		  <view class="image-uploader">
		      <text class="upload-title">选择图片上传</text>
		      <view class="upload-area">
		        <view 
		          v-for="(image, index) in images" 
		          :key="index"
		          class="image-preview-container"
		        >
		          <image :src="image" class="image-preview" mode="aspectFill" />
		          <view class="delete-btn" @click="deleteImage(index)">×</view>
		        </view>
		        
		        <view 
		          class="upload-button"
		          @click="chooseImage"
		          v-if="images.length < maxImages"
		        >
		          <text class="plus">+</text>
		        </view>
		      </view>
		    </view>
			<button 
			    class="submit-button"
			    :disabled="isLoading"
			    @click="handleSubmit"
			  >
			    提交反馈
			  </button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import Nav from '../../components/nav.vue';
	const pageTitle = ref('意见反馈');
	const feedbackText = ref('')
	const maxImages = 9
	const images = ref([])
	const isLoading = ref(false)
	const emit = defineEmits(['submit'])
	
	
	const chooseImage = () => {
	  uni.chooseImage({
	    count: maxImages - images.value.length,
	    sizeType: ['compressed'],
	    sourceType: ['album', 'camera'],
	    success: (res) => {
	      images.value = [...images.value, ...res.tempFilePaths]
	    }
	  })
	}
	
	const deleteImage = (index) => {
	  images.value.splice(index, 1)
	}
	const handleSubmit = () => {
	  uni.navigateTo({
	  	url: '/pages/About/About'
	  })
	}
	defineExpose({
	  feedbackText,images
	})
	

	
	
</script>

<style scoped>
.feedback-textarea-container {
  width: 327px;
  height: 220px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px  rgba(0, 0, 0, 0.25);
  padding: 20px 17px 130px 18px;
  box-sizing: border-box;
  margin-top: 49px;
  margin-left: 31px;
}

.feedback-textarea {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 17.38px;
  color: rgba(0, 0, 0, 0.25);
}

.placeholder-style {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
}
.image-uploader {
	margin-left: 31px;
  margin-top: 22px;
}

.upload-title {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 1);
  margin-left: 11px;
 
}

.upload-area {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.image-preview-container {
  position: relative;
  width: 88px;
  height: 88px;
}

.image-preview {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.delete-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.upload-button {
  width: 80px;
  height: 80px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px  rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
   margin-top: 26px;
}

.plus {
  font-size: 32px;
  color: rgba(0, 0, 0, 0.25);
}
.submit-button {
 width: 335px;
 height: 61px;
 opacity: 1;
 border-radius: 15px;
 background: rgba(255, 213, 197, 1);
 margin-top: 163px;
 margin-left: 27px;
 font-size: 24px;
 font-weight: 400;
 letter-spacing: 0px;
 line-height: 34.75px;
 padding: 11px 119px 15px 120px;
}

.submit-button:active {
  opacity: 0.9;
}

.submit-button[disabled] {
  opacity: 0.6;
}
</style>

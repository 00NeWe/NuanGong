<template>
  <view class="function-page">
    <view class="device-panel">
      <view class="device-header">
        <view class="device-title">
          <text class="title">物可素暖宫按摩腰带</text>
          <text class="status">已连接</text>
        </view>
        <switch :checked="isDeviceOn" @change="toggleDevice" color="rgba(255, 213, 197, 1)" />
      </view>

      <view class="control-buttons">
        <button class="timer-btn" @click="showTimerModal">
          <text>定时</text>
        </button>
        <button class="control-btn" @click="togglePlay" :style="{ backgroundColor: isPlaying ? '#FFD5C5' : '#E8E8E8' }">
          <text class="play-icon" v-if="isPlaying">

                ⏸
              </text>
              <text class="play-icon" v-else>

                ▶
              </text>
        </button>
        <view class="battery">
          <view class="battery-icon">
            <image class="add-image" src="/static/images/battery.png" mode="aspectFit" />
          </view>
          <text class="ten">10%</text>
        </view>
      </view>


      <view class="control-section">
        <view class="section-header">
          <text>按摩</text>
          <switch :checked="isMassageOn" @change="toggleMassage" color="rgba(255, 213, 197, 1)" style="margin-top: 4px;"/>
        </view>
        <view class="slider-group">
          <view class="fre">
            <text>频率</text>
            <view class="fre-slider">
				<view class="fre-slider-color"></view>
			</view>
          </view>
          <view class="fre">
            <text>强度</text>
            <view class="fre-slider"><view class="fre-slider-color"></view></view>
          </view>
        </view>
      </view>

      
      <view class="control-section">
        <view class="section-header">
          <text>热敷</text>
          <switch :checked="isHeatOn" @change="toggleHeat" color="rgba(255, 213, 197, 1)" />
        </view>
        <view class="slider-item">
          <text class="tempr" >温度</text>
          <view class="hot-container"><text class="temperature-value">45°C</text></view>           	
          
        </view>
      </view>

      <view class="usage-time">
        上次使用时间：2024-09-10
      </view>
    </view>

    <!-- 时间 -->
    <view class="modal" v-if="showModal" @click="closeModal">
      <view class="modal-content" @click.stop>
        <view 
          v-for="duration in timerOptions" 
          :key="duration"
          class="modal-option"
          @click="selectDuration(duration)"
        >
          {{ duration }}分钟
        </view>
        <view class="modal-option complete" @click="confirmTimer">
          完成
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'



const isPlaying = ref(false); // 初始状态为未播放


// 设备状态
const isDeviceOn = ref(true)
const isMassageOn = ref(false)
const isHeatOn = ref(false)

// 控制值
const frequency = ref(50)
const intensity = ref(50)
const temperature = ref(45)

// 时间
const showModal = ref(false)
const timerOptions = [30, 60, 90, 120]
const selectedDuration = ref(null)

function togglePlay() {
  isPlaying.value = !isPlaying.value; // 切换播放状态
}

const toggleDevice = (e) => {
  isDeviceOn.value = e.detail.value
}

const toggleMassage = (e) => {
  isMassageOn.value = e.detail.value
}

const toggleHeat = (e) => {
  isHeatOn.value = e.detail.value
}


const onFrequencyChange = (e) => {
  frequency.value = e.detail.value
}

const onIntensityChange = (e) => {
  intensity.value = e.detail.value
}

const onTemperatureChange = (e) => {
  temperature.value = e.detail.value
}


const showTimerModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const selectDuration = (duration) => {
  selectedDuration.value = duration
}

const confirmTimer = () => {
  if (selectedDuration.value) {

    console.log(`Timer set for ${selectedDuration.value} minutes`)
  }
  closeModal()
}
</script>

<style scoped>
.function-page {
	position: absolute;
	margin-top: 161px;
  min-height: 100vh;
}


.device-panel {
	
	margin-left: 28px;
  background: #FFFFFF;
  border-radius: 15px;

}

.device-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.device-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 54px;
  
}
.device-title .title{
	font-size: 24px;
	color: rgba(0, 0, 0, 1);
}
.status {
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
}

.control-buttons {
	width: 321px;
	height: 75px;

	margin-top: 24px;
	margin-left: 3px;
	border-radius: 20px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 2px 4px  rgba(166, 166, 166, 0.25);
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 16px;
  box-sizing: border-box;
}

.timer-btn {
	width: 91px;
	height: 42.46px;
	opacity: 1;
	border-radius: 20px;
	background: rgba(255, 213, 197, 1);

  color: rgba(35, 35, 35, 1);
  border: none;

  font-size: 18px;
}

.control-btn {
  width: 67px;
  height: 41px;
  opacity: 1;
  border-radius: 20.5px;
  background: rgba(232, 232, 232, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.play-icon{
	line-height: 16px;
	color: rgba(255, 255, 255, 1);;
}
.battery {
  display: flex;
  

  
}

.add-image {
 width: 24.12px;
 height: 29.07px;
 opacity: 1;


}
.ten{
	font-size: 20px;
	line-height: 28.96px;
	color: rgba(0, 0, 0, 1);
}


.control-section {
  margin-bottom: 29px;
}

.section-header {
  display: flex;

  font-size: 18px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  align-items: center;
  margin-left: 1px;
  
  margin-bottom: 30px;
}
.section-header text{
	margin-right: 229px;
}
.fre-slider{
	width: 304px;
	height: 25px;
	opacity: 1;
	border-radius: 10px;
	transform: rotate(-180deg);
	background: rgba(255, 213, 197, 1);
	margin-left: 11px;
}
.fre-slider-color{
	position: absolute;
	width: 86.28px;
	height: 25px;
	opacity: 1;
	border-radius: 10px;
	background: rgba(208, 242, 222, 1);
}
.slider-group {
  display: flex;
  flex-direction: column;
  gap: 21px;
}

.fre {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fre text{
	margin-left: 19px;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 20.27px;
	color: rgba(0, 0, 0, 1);
}
.slider-item{
	margin-top: 28px;
	margin-left: 18px;
}
.slider-item .tempr{
	font-size: 14px;
	line-height: 20.27px;
	color: rgba(0, 0, 0, 1);
}
.hot-container{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 304px;
	height: 66px;
	opacity: 1;
	border-radius: 30px;
	background: linear-gradient(90deg, rgba(255, 87, 25, 0.25) 0%, rgba(67, 207, 124, 0.25) 100%);
	font-size: 20px;
	font-weight: 400;
	line-height: 28.96px;
	color: rgba(0, 0, 0, 1);
	margin-top: 3px;

}


.usage-time {
  color: rgba(0, 0, 0, 1);
  font-size: 12px;
  text-align: center;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  z-index: 1000;
}

.modal-content {
	position: absolute;
	margin-bottom:271px ;
	margin-left:43px ;
  width: 304px;
  height: 317px;
  opacity: 1;
  border-radius: 30px;
  background: rgba(255, 255, 255, 1);
}

.modal-option {
	font-size: 20px;
  padding: 18px 0;
  text-align: center;
  border-bottom: 1px solid #F0F0F0;
}

.modal-option:last-child {
  border-bottom: none;
}

.complete {
	font-size: 20px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);

  background: rgba(255, 213, 197, 1);
border-radius: 10px 10px 30px 30px;
  overflow: hidden; 
}
</style>
<template>
	<Nav title="我的提醒" backUrl="/pages/FunctionPage/FunctionPage3"/>
	 <view class="page-container">
  <view class="settings-container" :class="{ 'mask-blur': showTimePicker }">
	  
    <!-- 朋友提醒 -->
    <view class="setting-item">
      <view class="setting-label">亲友提醒</view>
      <switch
        :checked="friendReminder"
        @change="handleFriendReminderChange"
        color="rgba(255, 213, 197, 1)"
        class="custom-switch"
      />
    </view>
    
    <!-- 提醒时间 -->
    <view class="setting-item time-picker" @tap="openTimePicker('friendReminder')">
      <view class="setting-label">提醒时间</view>
      <view class="time-value">
        提前{{ selectedDays }}天 {{ formatTime(selectedHour, selectedMinute) }}
        <text class="arrow">></text>
      </view>
    </view>

    <!-- 经期预测 -->
    <view class="setting-item">
      <view class="setting-label">预测经期推送</view>
      <switch
        :checked="periodPrediction"
        @change="handlePeriodPredictionChange"
        color="rgba(255, 213, 197, 1)"
        class="custom-switch"
      />
    </view>

    <!-- 提醒时间 -->
    <view class="setting-item time-picker" @tap="showTimePicker('periodPrediction')">
      <view class="setting-label">提醒时间</view>
      <view class="time-value">
        提前{{ predictionDays }}天 {{ predictionTime }}
        <text class="arrow">></text>
      </view>
    </view>

    <!-- 亲友管理 -->
    <view class="setting-item" @tap="navigateToFriendManagement">
      <view class="setting-label">亲友管理</view>
      <text class="arrow">></text>
    </view>


    <view class="bottom-icons">
      <view class="icon-circle" @tap="navigateToFriendManagement">
        <image class="icon" src="/static/images/user.png"></image>
      </view>
      <view class="icon-circle" style="background: rgba(255, 213, 197, 0.25);" @tap="navigateToManagement">
        <image class="icon" src="/static/images/zsadd.png"></image>
      </view>
    </view>
	 
  </view>
  <!-- 时间灯箱 -->
  <view class="picker-popup" v-if="showTimePicker">
       <view class="picker-mask" @tap="closeTimePicker"></view>
       <view class="picker-content">
         <picker-view
           class="picker-view"
           :indicator-style="indicatorStyle"
           :value="[daysIndex, hourIndex, minuteIndex]"
           @change="handlePickerChange"
         >
       
           <picker-view-column>
             <view class="picker-item" v-for="(day, index) in days" :key="index">
               提前{{ day }}天
             </view>
           </picker-view-column>
  	
         
           <picker-view-column>
             <view class="picker-item" v-for="hour in hours" :key="hour">
               {{ hour.toString().padStart(2, '0') }}
             </view>
           </picker-view-column>
  	
         
           <picker-view-column>
             <view class="picker-item label">
               小时
             </view>
           </picker-view-column>
  	
           
           <picker-view-column>
             <view class="picker-item" v-for="minute in minutes" :key="minute">
               {{ minute.toString().padStart(2, '0') }}
             </view>
           </picker-view-column>
  	
         
           <picker-view-column>
             <view class="picker-item label">
               分钟
             </view>
           </picker-view-column>
         </picker-view>
  	
         <view class="save-button" @tap="saveTimeSelection">
           保存
         </view>
       </view>
     </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Nav from '../../components/nav.vue'


const showTimePicker = ref(false)
const selectedDays = ref(2)
const selectedHour = ref(10)
const selectedMinute = ref(0)

const daysIndex = ref(1)  
const hourIndex = ref(9)  
const minuteIndex = ref(0) 


const days = [1, 2, 3]
const hours = Array.from({ length: 24 }, (_, i) => i)
const minutes = Array.from({ length: 60 }, (_, i) => i)

const indicatorStyle = 'height: 40px;'

const openTimePicker = () => {
  showTimePicker.value = true
}

const closeTimePicker = () => {
  showTimePicker.value = false
}

const handlePickerChange = (e) => {
  const values = e.detail.value
  daysIndex.value = values[0]
  hourIndex.value = values[1]
  minuteIndex.value = values[3] // Skip the label column
}

const saveTimeSelection = () => {
  selectedDays.value = days[daysIndex.value]
  selectedHour.value = hours[hourIndex.value]
  selectedMinute.value = minutes[minuteIndex.value]
  closeTimePicker()
}

const formatTime = (hour, minute) => {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
}
const navigateToFriendManagement = () => {
  
 uni.navigateTo({
 	url:'/pages/ManageFr/ManageFr'
 })
}
const navigateToManagement = () => {
  
 uni.navigateTo({
 	url:'/pages/Manage/Manage'
 })
}

</script>

<style scoped>
	.page-container {
		padding-top: 54px;
	  min-height: 100vh;
	  background: rgba(255, 255, 255, 1);
	  position: relative;
	  margin-top: 0;
	  box-sizing: border-box;
	}
.settings-container {	
   width: 328px;
    margin: 0 auto 0;
    padding: 21px 24px 42px 25px;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    transition: filter 0.3s ease;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #F5F5F5;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-label {
  font-size: 16px;
  color: #333;
}

.time-picker {
  cursor: pointer;
}

.time-value {
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.arrow {
  margin-left: 5px;
  color: #999;
}

.custom-switch {
  transform: scale(0.9);
}

.bottom-icons {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 5px;
}

.icon-circle {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 213, 197, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
	width: 16.97px;
	height: 19.92px;
  font-size: 20px;
  color: #FFB6C1;
}
.mask-blur {
  filter: blur(2px);

}
.picker-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.picker-popup {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
}

.picker-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.picker-content {
  position: absolute;
  background-color: #FFFFFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px 0;
  z-index: 1001;
  left: 0px;
  top: 490px;
  width: 390px;
  height: 354px;
  opacity: 1;
  border-radius: 18.53px 18.53px, 0px, 0px;
  background: rgba(255, 255, 255, 1);
}

.picker-view {
  width: 100%;
  height: 240px;
}

.picker-item {
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #333333;
}

.picker-item.label {
  color: #999999;
}

.save-button {
  margin: 10px 15px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(255, 213, 197, 1);
  border-radius: 25px;
  color: #FFFFFF;
  font-size: 16px;
}
</style>
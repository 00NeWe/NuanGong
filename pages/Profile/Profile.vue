<template>
  <view class="settings-page">
    <Nav title="个人资料设置" backUrl="/pages/FunctionPage/FunctionPage3"/>
    <view class="settings-container" :class="{ 'mask-blur': showPeriodPicker || showMenstruationPicker }">
      <view class="menu-item" @click="handlePeriodDaysClick" style="margin-top: 84px;margin-left: 24px;">
        <text class="item-title">周期天数</text>
        <view class="item-right">
          <text class="item-value">{{ periodDays }}</text>
          <text class="arrow">></text>
        </view>
      </view>

      <view class="menu-item" @click="handleMenstruationDaysClick" style="margin-top: 61px;margin-left: 24px;">
        <text class="item-title">经期天数</text>
        <view class="item-right">
          <text class="item-value">{{ menstruationDays }}</text>
          <text class="arrow">></text>
        </view>
      </view>

      <button class="confirm-button" @click="handleConfirm" style="margin-top: 81px;margin-left: 24px;">确定</button>
    </view>

    <!-- Period Days Picker -->
    <view class="picker-overlay" v-if="showPeriodPicker">
      <view class="picker-mask" @tap="closePeriodPicker"></view>
      <view class="picker-content">
        <view class="picker-title">选择周期天数</view>
        <picker-view
          class="picker-view"
          :indicator-style="indicatorStyle"
          :value="[periodDaysIndex]"
          @change="handlePeriodPickerChange"
        >
          <picker-view-column>
            <view class="picker-item" v-for="day in periodDaysRange" :key="day">
              {{ day }}
            </view>
          </picker-view-column>
        </picker-view>
        <view class="save-button" @tap="savePeriodDays">保存</view>
      </view>
    </view>

    <!-- Menstruation Days Picker -->
    <view class="picker-overlay" v-if="showMenstruationPicker">
      <view class="picker-mask" @tap="closeMenstruationPicker"></view>
      <view class="picker-content">
        <view class="picker-title">选择经期天数</view>
        <picker-view
          class="picker-view"
          :indicator-style="indicatorStyle"
          :value="[menstruationDaysIndex]"
          @change="handleMenstruationPickerChange"
        >
          <picker-view-column>
            <view class="picker-item" v-for="day in menstruationDaysRange" :key="day">
              {{ day }}
            </view>
          </picker-view-column>
        </picker-view>
        <view class="save-button" @tap="saveMenstruationDays">保存</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import Nav from '../../components/nav.vue';

// 周期
const showPeriodPicker = ref(false);
const periodDays = ref(30);
const periodDaysIndex = ref(3);
const periodDaysRange = Array.from({length: 5}, (_, i) => i + 27); // 27-31

// 经期状态
const showMenstruationPicker = ref(false);
const menstruationDays = ref(7);
const menstruationDaysIndex = ref(3);
const menstruationDaysRange = Array.from({length: 5}, (_, i) => i + 4); // 4-8

const indicatorStyle = 'height: 50px;';


const handlePeriodDaysClick = () => {
  showPeriodPicker.value = true;
}

const closePeriodPicker = () => {
  showPeriodPicker.value = false;
}

const handlePeriodPickerChange = (e) => {
  periodDaysIndex.value = e.detail.value[0];
}

const savePeriodDays = () => {
  periodDays.value = periodDaysRange[periodDaysIndex.value];
  closePeriodPicker();
}


const handleMenstruationDaysClick = () => {
  showMenstruationPicker.value = true;
}

const closeMenstruationPicker = () => {
  showMenstruationPicker.value = false;
}

const handleMenstruationPickerChange = (e) => {
  menstruationDaysIndex.value = e.detail.value[0];
}

const saveMenstruationDays = () => {
  menstruationDays.value = menstruationDaysRange[menstruationDaysIndex.value];
  closeMenstruationPicker();
}

const handleConfirm = () => {
 
 uni.switchTab({
 	url:'/pages/FunctionPage/FunctionPage3'
 })
}
</script>

<style scoped>
.settings-page {
  background-color: #F5F5F5;
  min-height: 100vh;
  position: relative;
}

.settings-container {
  transition: filter 0.3s ease;
}

.mask-blur {
  filter: blur(3px);
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 342px;
  height: 45px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  padding: 11px 19px 14px 19px;
  box-sizing: border-box;
}

.item-title {
  font-size: 16px;
  color: #333;
}

.item-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.item-value {
  font-size: 16px;
  color: #666;
}

.arrow {
  font-size: 16px;
  color: #999;
}

.confirm-button {
  width: 342px;
  height: 56px;
  opacity: 1;
  border-radius: 15px;
  background: rgba(255, 213, 197, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px 125px 7px 125px;
  box-sizing: border-box;
  color: #333;
  font-size: 16px;
}

.confirm-button:active {
  opacity: 0.9;
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

.picker-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.picker-content {
  position: relative;
  background-color: #FFFFFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px 0;
  z-index: 1001;
}

.picker-title {
  text-align: center;
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.picker-view {
  width: 100%;
  height: 200px;
}

.picker-item {
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #333;
}

.save-button {
  margin: 20px 15px 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(255, 213, 197, 1);
  border-radius: 25px;
  color: #333;
  font-size: 16px;
}
</style>
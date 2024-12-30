<template>
  <view class="usage-stats-card">
    <!-- 上次使用时间 -->
    <view class="last-usage">
      上次使用时间: {{ lastUsageTime }}
    </view>

    <!-- 时间周期 -->
    <view class="time-tabs">
        <view 
          v-for="(tab, index) in tabs" 
          :key="tab"
          class="tab-container"
        >
          <text 
            :class="['tab', { active: currentTab === tab }]"
            @click="currentTab = tab"
          >
            {{ tab }}
          </text>
          
      
          <view v-if="index < tabs.length - 1" class="vertical-line"></view>
        </view>
      </view>
<view class="lev-line"></view>

    <view class="chart-container">
		<view class="top-flex">
			<!-- 时间 -->
			
			<view class="time-labels">
			  <text>2小时</text>
			  <text>1小时</text>
			  <text>30分</text>
			  <text>0</text>
			</view>		
			<!-- 图表区 -->
			<view class="chart">
			  <image src="/static/images/面积图.png" mode="aspectFit" class="chart-image" />
			</view>
		</view>
      

      <view class="day-labels">
        <text v-for="day in weekDays" :key="day">{{ day }}</text>
      </view>
	  <!-- 使用数据 -->
	  <view class="stats">
	    <view class="stat-item">
	      <text class="stat-label">平均使用 (小时)</text>
	      <text class="stat-value">1.5小时</text>
	    </view>
	    <view class="stat-item">
	      <text class="stat-label">累计使用 (小时)</text>
	      <text class="stat-value">12小时20分钟</text>
	    </view>
	  </view>
    </view>

  
  </view>
</template>

<script setup>
import { ref } from 'vue'

const lastUsageTime = ref('2024-09-10 9:30')
const currentTab = ref('周')
const tabs = ['周', '月', '年']
const weekDays = ['二', '三', '四', '五', '六', '日', '一']


const changeTab = (tab) => {
  currentTab.value = tab

}
</script>

<style scoped>
.usage-stats-card {
  width: 365px;
  height: 347px;
  opacity: 1;
  border-radius: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
  margin-top: 16px;
  margin-left: 13px;
  margin-bottom: 20px;
}

.last-usage {
	margin-top: 20px;
	margin-left: 23px;
 font-size: 12px;
 font-weight: 400;
 letter-spacing: 0px;
 line-height: 17.38px;
 color: rgba(0, 0, 0, 1);
 text-align: left;
 vertical-align: top;
}

.time-tabs {
  display: flex;
  align-items: center;
  width: 336px;
  height: 30px;
 
  margin-top: 16px;
  margin-left: 13px;
}

.tab-container {
	width: 112px;
  display: flex;
  align-items: center;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 30px;
  font-size: 12px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  cursor: pointer;
  padding: 0 16px;
}

.tab.active {
  border-radius: 10px;
  background: rgba(255, 213, 197, 1);
}

.vertical-line {
  width: 1px;
  height: 15px;
  background-color: rgba(232, 232, 232, 1);
  margin: 0 5px;
}
.lev-line{
	height: 0px;
	opacity: 1;	
	width: 339px;
	border: 1px solid rgba(166, 166, 166, 1);
	margin-top: 9px;
	margin-left: 13px;
}
.top-flex{
	display: flex;
	margin-top: 3px;
	
}
.chart-container {
  height: 200px;
  margin-left: 14px;
  display: flex;
  flex-direction: column;
}

.time-labels {
	height: 92%;
	
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding-right: 9px;
  margin-top: 6px;
  
}
.time-labels text{
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 17.38px;
	color: rgba(0, 0, 0, 1);
}

.chart {
  flex: 1;
  position: relative;
  margin-right: 0px;
}

.chart-image {
	margin-top: 10px;
  width: 297px;
  height: 136px;
  object-fit: contain;
}

.day-labels {
  display: flex;
  justify-content: space-between;
 
margin-left: 40px;
width: 294px;
height: 20px;
}
.day-labels text{
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 20px;
	color: rgba(0, 0, 0, 0.8);
}
.stats {
  display: flex;
  justify-content: space-between;
  margin:21px 111px 51px 32px;


 
  border-top: 1px solid #EEEEEE;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.stat-item text{
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 17.38px;
	color: rgba(0, 0, 0, 1);
}

</style>
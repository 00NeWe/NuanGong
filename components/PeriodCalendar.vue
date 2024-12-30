<template>
	<view class="calendar-container">
		<!-- 头部 -->
		<view class="calendar-header">
		  <text class="month-year">2024年8月</text>
		</view>
		<view class="calendar">
			
				
			<!-- 周 -->
			<view class="weekdays">
			  <text v-for="day in weekDays" :key="day" class="weekday">{{ day }}</text>
			</view>
				
			<!-- gird格 -->
			<view class="calendar-grid">
			  <view 
			    v-for="(date, index) in calendarDays" 
			    :key="index"
			    class="calendar-day"
			    :class="{
			      'current-day': isCurrentDay(date),
			      'period-day': isPeriodDay(date),
			      'selected-day': isSelectedDay(date),
			      'empty-day': !date,
				  'font-color-blue': index <= 6,
				  'round-corner12': index === 11 || index === 14 ,
				  'round-corner15': index === 13 || index === 16
				 
			    }"
			  >
			    <text>{{ date?.getDate() }}</text>
			  </view>
			</view>
			<!-- 日历导航 -->
			<view class="calendar-navigation">
			  <text class="nav-arrow" >＜</text>
			  <text class="nav-today" >回今日</text>
			  <text class="nav-arrow" >＞</text>
			</view>
		</view>
	   
	
	    
	

	    <view class="calendar-legend">
	      <view class="legend-item">
	        <view class="legend-dot period"></view>
	        <text>经期</text>
	      </view>
	      <view class="legend-item">
	        <view class="legend-dot predicted"></view>
	        <text>预测的经期</text>
	      </view>
	      <view class="legend-item">
	        <view class="legend-dot ovulation"></view>
	        <text>排卵期</text>
	      </view>
	      <view class="legend-item">
	        <view class="legend-dot ovulation-day"></view>
	        <text>排卵日</text>
	      </view>
	    </view>
	  </view>
</template>

<script setup>
	import {
	    ref,
	    computed
	} from 'vue'
	
	const weekDays = ['一', '二', '三', '四', '五', '六', '日']
	const currentDate = ref(new Date())
	const selectedMonth = ref(new Date())
	
	// 生成日历天数
	const calendarDays = computed(() => {
	    const year = selectedMonth.value.getFullYear()
	    const month = selectedMonth.value.getMonth()
	    const firstDay = new Date(year, month, 1)
	    const lastDay = new Date(year, month, 0)
	    
	    // 确保日历从星期一开始
	    const days = []
	    
	    
	    
	    // 添加前置空白天数
	    for (let i = 1; i < 1; i++) {
	        days.push(null)
	    }
	    
	    // 添加当月所有天数
	    for (let i = 1; i <= lastDay.getDate(); i++) {
	        days.push(new Date(year, month, i))
	    }
	    
	    return days
	})
	
	// 帮助函数判断日期状态
	const isCurrentDay = (date) => {
	    if (!date) return false
	    // 修改为固定标记4号为current-day
	    return date.getDate() === 4
	}
	
	const isPeriodDay = (date) => {
	    if (!date) return false
	    // 示例月经期天数 (12-14, 15-17)
	    const periodDays = [12, 13, 14, 15, 16, 17]
	    return periodDays.includes(date.getDate())
	}
	
	const isSelectedDay = (date) => {
	    if (!date) return false
	    return false
	}
	

</script>

<style scoped>
	.calendar-container {
		position: absolute;
		top:111px;
		left:13px;
		width: 365px;
		height: 378px;
		display: flex;
		flex-direction: column;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 255, 255, 1);
		/* background-color: red; */
		box-shadow: 0px 2px 4px rgba(166, 166, 166, 0.25);
		box-sizing: border-box;
	}

	.calendar {
		margin: auto;
		width: 95%;
		height: 263px;
		opacity: 1;
		background: rgba(255, 255, 255, 1);
	}

	.calendar-header {
		margin-top: 20px;
		margin-left: 9px;
		text-align: left;
		margin-bottom: 13px;
	}
  .calendar-day.font-color-blue {
   color:rgba(140, 194, 255, 1);
  }
	.month-year {
		font-size: 16px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 23.17px;
		color: rgba(0, 0, 0, 1);
		
		font-weight: bold;
	}

	.weekdays {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: center;
		margin-bottom: 20rpx;
	}

	.weekday {
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 20px;
		color: rgba(0, 0, 0, 0.8);
		text-align: center;
		vertical-align: middle;
	
	}

	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		height: 185px;

		box-sizing: border-box;
	}

	.calendar-day {
		
		/* aspect-ratio: 1; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		border-radius: 50%;
		color: rgba(0, 0, 0, 1);
	}
    
	.empty-day {
		pointer-events: none;
	}

	.current-day {
		width: 37px;    
        margin-left: 5px;
		background-color:  rgba(140, 194, 255, 0.25);
		color: #333;
		
		 overflow: hidden; 
	}

	.period-day {
		overflow: hidden;
		border-radius: 0;
		background-color: rgba(255, 87, 25, 0.25);
		color: #333;
	}

	.selected-day {
	
		background-color: #FFC0CB;
		color: white;
	}
    .round-corner12{
		border-top-left-radius: 15px; 
		  border-bottom-left-radius: 15px;
	}
	.round-corner15{
		border-top-right-radius: 15px;
		  border-bottom-right-radius: 15px;
	}
	.calendar-navigation {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40rpx;
		margin: 16rpx 0;
	}

	.nav-arrow {
		font-size: 32rpx;
		color: #666;
		padding: 10rpx;
	}

	.nav-today {
		font-size: 28rpx;
		color: #333;
		padding: 10rpx 30rpx;
		border-radius: 30rpx;
		background-color: #F5F5F5;
	}

	.calendar-legend {
		display: flex;
		justify-content: space-around;
		padding: 20rpx;
		width: 343px;
		height: 36px;
		opacity: 1;
		border-radius: 20px;
		background: rgba(255, 213, 197, 0.25);
		box-sizing: border-box;
		margin-bottom: 15px;
		margin-left: 13px;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 10rpx;
	}

	.legend-dot {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
	}

	.legend-item text {
		font-size: 12px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 17.38px;
		color: rgba(0, 0, 0, 1);
	}

	.period {
		width: 5px;
		height: 5px;
		opacity: 1;
		background: rgba(255, 213, 197, 1);
	}

	.predicted {
		width: 5px;
		height: 5px;
		opacity: 1;
		background: rgba(255, 213, 197, 1);
	}

	.ovulation {
width: 5px;
height: 5px;
opacity: 1;
background: rgba(140, 194, 255, 1);
	}

	.ovulation-day {
		width: 5px;
		height: 5px;
		opacity: 1;
		background: rgba(140, 194, 255, 1);
	}
	
</style>
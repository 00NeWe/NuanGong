<template>
  <view class="calendar">
    <view class="calendar-header">
      <view class="month-selector">
        <text @click="previousMonth">&lt;</text>
        <text>{{ currentYearMonth }}</text>
        <text @click="nextMonth">&gt;</text>
      </view>
      <view class="weekdays">
        <text v-for="day in weekDays" :key="day">{{ day }}</text>
      </view>
    </view>
    
    <view class="calendar-body">
      <view 
        v-for="(day, index) in calendarDays" 
        :key="index"
        class="day"
        :class="{ 
          'selected': isSelected(day),
          'current': isToday(day),
          'disabled': !day.enabled
        }"
        @click="selectDate(day)"
      >
        <text>{{ day.date }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue'

const weekDays = ['日', '一', '二', '三', '四', '五', '六']
const currentDate = ref(new Date())
const selectedDate = ref(null)

const currentYearMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth() + 1
  return `${year}年${month}月`
})

const calendarDays = computed(() => {
  return []
})

const previousMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  )
}

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  )
}

const selectDate = (day) => {
  if (day.enabled) {
    selectedDate.value = day.date
    emit('dateSelected', day.date)
  }
}

const isSelected = (day) => {
  return day.date === selectedDate.value
}

const isToday = (day) => {
  const today = new Date()
  return day.date === today.getDate() &&
    currentDate.value.getMonth() === today.getMonth() &&
    currentDate.value.getFullYear() === today.getFullYear()
}
</script>

<style scoped>
.calendar {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  margin-bottom: 20px;
}

.month-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: #666;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.day.selected {
  background-color: #FFC0CB;
  color: white;
}

.day.current {
  border: 1px solid #FFC0CB;
}

.day.disabled {
  color: #ccc;
}
</style>
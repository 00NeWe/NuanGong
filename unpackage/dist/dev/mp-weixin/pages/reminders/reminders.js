"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const indicatorStyle = "height: 40px;";
const _sfc_main = {
  __name: "reminders",
  setup(__props) {
    const showTimePicker = common_vendor.ref(false);
    const selectedDays = common_vendor.ref(2);
    const selectedHour = common_vendor.ref(10);
    const selectedMinute = common_vendor.ref(0);
    const daysIndex = common_vendor.ref(1);
    const hourIndex = common_vendor.ref(9);
    const minuteIndex = common_vendor.ref(0);
    const days = [1, 2, 3];
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    const openTimePicker = () => {
      showTimePicker.value = true;
    };
    const closeTimePicker = () => {
      showTimePicker.value = false;
    };
    const handlePickerChange = (e) => {
      const values = e.detail.value;
      daysIndex.value = values[0];
      hourIndex.value = values[1];
      minuteIndex.value = values[3];
    };
    const saveTimeSelection = () => {
      selectedDays.value = days[daysIndex.value];
      selectedHour.value = hours[hourIndex.value];
      selectedMinute.value = minutes[minuteIndex.value];
      closeTimePicker();
    };
    const formatTime = (hour, minute) => {
      return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
    };
    const navigateToFriendManagement = () => {
      common_vendor.index.navigateTo({
        url: "/pages/ManageFr/ManageFr"
      });
    };
    const navigateToManagement = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Manage/Manage"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "我的提醒",
          backUrl: "/pages/FunctionPage/FunctionPage3"
        }),
        b: _ctx.friendReminder,
        c: common_vendor.o((...args) => _ctx.handleFriendReminderChange && _ctx.handleFriendReminderChange(...args)),
        d: common_vendor.t(selectedDays.value),
        e: common_vendor.t(formatTime(selectedHour.value, selectedMinute.value)),
        f: common_vendor.o(($event) => openTimePicker()),
        g: _ctx.periodPrediction,
        h: common_vendor.o((...args) => _ctx.handlePeriodPredictionChange && _ctx.handlePeriodPredictionChange(...args)),
        i: common_vendor.t(_ctx.predictionDays),
        j: common_vendor.t(_ctx.predictionTime),
        k: common_vendor.o(($event) => showTimePicker.value("periodPrediction")),
        l: common_vendor.o(navigateToFriendManagement),
        m: common_assets._imports_0$5,
        n: common_vendor.o(navigateToFriendManagement),
        o: common_assets._imports_1$2,
        p: common_vendor.o(navigateToManagement),
        q: showTimePicker.value ? 1 : "",
        r: showTimePicker.value
      }, showTimePicker.value ? {
        s: common_vendor.o(closeTimePicker),
        t: common_vendor.f(days, (day, index, i0) => {
          return {
            a: common_vendor.t(day),
            b: index
          };
        }),
        v: common_vendor.f(common_vendor.unref(hours), (hour, k0, i0) => {
          return {
            a: common_vendor.t(hour.toString().padStart(2, "0")),
            b: hour
          };
        }),
        w: common_vendor.f(common_vendor.unref(minutes), (minute, k0, i0) => {
          return {
            a: common_vendor.t(minute.toString().padStart(2, "0")),
            b: minute
          };
        }),
        x: indicatorStyle,
        y: [daysIndex.value, hourIndex.value, minuteIndex.value],
        z: common_vendor.o(handlePickerChange),
        A: common_vendor.o(saveTimeSelection)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-32f99cfa"]]);
wx.createPage(MiniProgramPage);

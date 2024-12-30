"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "PeriodCalendar",
  setup(__props) {
    const weekDays = ["一", "二", "三", "四", "五", "六", "日"];
    common_vendor.ref(/* @__PURE__ */ new Date());
    const selectedMonth = common_vendor.ref(/* @__PURE__ */ new Date());
    const calendarDays = common_vendor.computed(() => {
      const year = selectedMonth.value.getFullYear();
      const month = selectedMonth.value.getMonth();
      const lastDay = new Date(year, month, 0);
      const days = [];
      for (let i = 1; i < 1; i++) {
        days.push(null);
      }
      for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push(new Date(year, month, i));
      }
      return days;
    });
    const isCurrentDay = (date) => {
      if (!date)
        return false;
      return date.getDate() === 4;
    };
    const isPeriodDay = (date) => {
      if (!date)
        return false;
      const periodDays = [12, 13, 14, 15, 16, 17];
      return periodDays.includes(date.getDate());
    };
    const isSelectedDay = (date) => {
      if (!date)
        return false;
      return false;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(weekDays, (day, k0, i0) => {
          return {
            a: common_vendor.t(day),
            b: day
          };
        }),
        b: common_vendor.f(calendarDays.value, (date, index, i0) => {
          return {
            a: common_vendor.t(date == null ? void 0 : date.getDate()),
            b: index,
            c: isCurrentDay(date) ? 1 : "",
            d: isPeriodDay(date) ? 1 : "",
            e: isSelectedDay(date) ? 1 : "",
            f: !date ? 1 : "",
            g: index <= 6 ? 1 : "",
            h: index === 11 || index === 14 ? 1 : "",
            i: index === 13 || index === 16 ? 1 : ""
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b7798eb"]]);
wx.createComponent(Component);

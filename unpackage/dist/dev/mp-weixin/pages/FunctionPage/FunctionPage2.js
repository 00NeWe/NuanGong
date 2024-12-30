"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "FunctionPage2",
  setup(__props) {
    const isReminderOn = common_vendor.ref(false);
    const toggleReminder = (event) => {
      isReminderOn.value = event.detail.value;
    };
    const weekdays = ["五", "六", "日", "一", "二", "三", "四"];
    const goToRecord = () => {
      common_vendor.index.navigateTo({
        url: "/pages/riliye/riliye"
      });
    };
    const goToPeriod = () => {
      common_vendor.index.navigateTo({
        url: "/pages/MenstrualRecord/MenstrualRecord"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(goToRecord),
        c: common_vendor.f(weekdays, (day, k0, i0) => {
          return {
            a: common_vendor.t(day),
            b: day
          };
        }),
        d: common_vendor.f(7, (n, index, i0) => {
          return {
            a: n,
            b: index,
            c: n <= 2 ? 1 : ""
          };
        }),
        e: isReminderOn.value,
        f: common_vendor.o(toggleReminder),
        g: common_vendor.o(() => {
        }),
        h: common_vendor.o(goToRecord),
        i: common_vendor.o(goToPeriod)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea38c1e0"]]);
wx.createPage(MiniProgramPage);

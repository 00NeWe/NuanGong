"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  (PeriodCalendar + UsageStats)();
}
const PeriodCalendar = () => "../../components/PeriodCalendar.js";
const UsageStats = () => "../../components/UsageStats.js";
const _sfc_main = {
  __name: "riliye",
  setup(__props) {
    const isReminderOn = common_vendor.ref(false);
    const toggleReminder = (event) => {
      isReminderOn.value = event.detail.value;
    };
    const goBack = () => {
      common_vendor.index.switchTab({
        url: "/pages/FunctionPage/FunctionPage2"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(goBack),
        c: isReminderOn.value,
        d: common_vendor.o(toggleReminder)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d381e537"]]);
wx.createPage(MiniProgramPage);

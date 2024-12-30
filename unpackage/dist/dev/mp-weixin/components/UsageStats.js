"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "UsageStats",
  setup(__props) {
    const lastUsageTime = common_vendor.ref("2024-09-10 9:30");
    const currentTab = common_vendor.ref("周");
    const tabs = ["周", "月", "年"];
    const weekDays = ["二", "三", "四", "五", "六", "日", "一"];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(lastUsageTime.value),
        b: common_vendor.f(tabs, (tab, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(tab),
            b: common_vendor.n({
              active: currentTab.value === tab
            }),
            c: common_vendor.o(($event) => currentTab.value = tab, tab),
            d: index < tabs.length - 1
          }, index < tabs.length - 1 ? {} : {}, {
            e: tab
          });
        }),
        c: common_assets._imports_0$8,
        d: common_vendor.f(weekDays, (day, k0, i0) => {
          return {
            a: common_vendor.t(day),
            b: day
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-67b97d28"]]);
wx.createComponent(Component);

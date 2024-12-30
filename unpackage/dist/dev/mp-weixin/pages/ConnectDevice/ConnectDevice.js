"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "ConnectDevice",
  setup(__props) {
    const goBack = () => {
      common_vendor.index.switchTab({
        url: "/pages/Connection/Connection"
      });
    };
    const navigateBack = () => {
      common_vendor.index.setStorageSync("shouldSwitch", true);
      common_vendor.index.navigateBack({
        delta: 1
        // 返回上一页（页面1）
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(goBack),
        c: common_vendor.o(navigateBack)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5e907863"]]);
wx.createPage(MiniProgramPage);

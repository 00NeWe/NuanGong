"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "Content",
  setup(__props) {
    const navigateToPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/ConnectDevice/ConnectDevice"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(navigateToPage),
        b: common_assets._imports_0$6,
        c: common_vendor.o(navigateToPage)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ff08d88"]]);
wx.createComponent(Component);

"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const phone = common_vendor.ref("");
    const goToPasswordLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/password"
      });
    };
    const goToPhoneLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/phone"
      });
    };
    const handleLogin = () => {
      common_vendor.index.switchTab({
        url: "/pages/Connection/Connection"
        // TabBar 页面的路径
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: phone.value,
        c: common_vendor.o(($event) => phone.value = $event.detail.value),
        d: common_vendor.o(handleLogin),
        e: common_vendor.o(goToPasswordLogin),
        f: common_vendor.o(goToPhoneLogin)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);

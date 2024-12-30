"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "password",
  setup(__props) {
    const account = common_vendor.ref("");
    const password = common_vendor.ref("");
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const goToForgotPassword = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/reset"
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
        a: common_assets._imports_0$3,
        b: common_vendor.o(goBack),
        c: common_assets._imports_1$1,
        d: account.value,
        e: common_vendor.o(($event) => account.value = $event.detail.value),
        f: password.value,
        g: common_vendor.o(($event) => password.value = $event.detail.value),
        h: common_vendor.o(handleLogin),
        i: common_vendor.o(goToForgotPassword)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-26a2d353"]]);
wx.createPage(MiniProgramPage);

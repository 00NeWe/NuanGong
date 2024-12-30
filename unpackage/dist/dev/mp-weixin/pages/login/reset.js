"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "reset",
  setup(__props) {
    const account = common_vendor.ref("");
    common_vendor.ref("");
    const password = common_vendor.ref("");
    common_vendor.ref("");
    const goIndex = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    };
    const handleReset = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/password"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(goIndex),
        c: account.value,
        d: common_vendor.o(($event) => account.value = $event.detail.value),
        e: _ctx.verificationCode,
        f: common_vendor.o(($event) => _ctx.verificationCode = $event.detail.value),
        g: common_vendor.o((...args) => _ctx.handleGetCode && _ctx.handleGetCode(...args)),
        h: password.value,
        i: common_vendor.o(($event) => password.value = $event.detail.value),
        j: password.value,
        k: common_vendor.o(($event) => password.value = $event.detail.value),
        l: common_vendor.o(handleReset)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1157eb0a"]]);
wx.createPage(MiniProgramPage);

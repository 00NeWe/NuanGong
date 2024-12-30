"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const _sfc_main = {
  __name: "Setting",
  setup(__props) {
    const handlePeriodDaysClick = () => {
      common_vendor.index.navigateTo({
        url: "/pages/splash/splash"
      });
    };
    const handleMenstruationDaysClick = () => {
      common_vendor.index.navigateTo({
        url: "/pages/splash/splash"
      });
    };
    const handleConfirm = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/password"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "设置"
        }),
        b: common_vendor.o(handlePeriodDaysClick),
        c: common_vendor.o(handleMenstruationDaysClick),
        d: common_vendor.o(handleConfirm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3c55a289"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Content + ConnectedContent)();
}
const Content = () => "../../components/Content.js";
const ConnectedContent = () => "../../components/ConnectedContent.js";
const _sfc_main = {
  __name: "Connection",
  setup(__props) {
    const showContent = common_vendor.ref(true);
    common_vendor.onShow(() => {
      const shouldSwitch = common_vendor.index.getStorageSync("shouldSwitch");
      if (shouldSwitch !== void 0) {
        showContent.value = !shouldSwitch;
        common_vendor.index.removeStorageSync("shouldSwitch");
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: showContent.value
      }, showContent.value ? {} : {}, {
        b: !showContent.value
      }, !showContent.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-84211f74"]]);
wx.createPage(MiniProgramPage);

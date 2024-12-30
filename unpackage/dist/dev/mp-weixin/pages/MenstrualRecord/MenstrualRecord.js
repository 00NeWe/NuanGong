"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  MrContent();
}
const MrContent = () => "../../components/MrContent.js";
const _sfc_main = {
  __name: "MenstrualRecord",
  setup(__props) {
    const goBack = () => {
      common_vendor.index.switchTab({
        url: "/pages/FunctionPage/FunctionPage2"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(goBack)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0c64c6e5"]]);
wx.createPage(MiniProgramPage);

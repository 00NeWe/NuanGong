"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const _sfc_main = {
  __name: "About",
  setup(__props) {
    const pageTitle = common_vendor.ref("关于我们");
    const backUrl = common_vendor.ref("/pages/FunctionPage/FunctionPage3");
    const settings = common_vendor.ref([
      { title: "用户协议" },
      { title: "隐私政策" },
      { title: "第三方共享个人信息清单" },
      { title: "版本号" },
      { title: "意见反馈" }
    ]);
    function goFeedback() {
      common_vendor.index.navigateTo({
        url: "/pages/PwdReset/PwdReset",
        fail: (err) => {
          console.error("Navigation failed:", err);
          common_vendor.index.showToast({
            title: "页面不存在",
            icon: "none"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: pageTitle.value,
          backUrl: backUrl.value
        }),
        b: common_assets._imports_0$2,
        c: common_vendor.f(settings.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index,
            c: common_vendor.o(($event) => item.title === "意见反馈" ? goFeedback() : null, index)
          };
        }),
        d: common_assets._imports_0$4
      };
    };
  }
};
wx.createPage(_sfc_main);

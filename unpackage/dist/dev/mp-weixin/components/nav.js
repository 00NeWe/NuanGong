"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "nav",
  props: {
    title: {
      type: String,
      required: true
    },
    backUrl: {
      type: String,
      default: ""
      // 默认为空，为空时执行返回上一页
    }
  },
  setup(__props) {
    const props = __props;
    const handleBack = () => {
      if (props.backUrl) {
        if (isTabBarUrl(props.backUrl)) {
          common_vendor.index.switchTab({
            url: props.backUrl
          });
        } else {
          common_vendor.index.navigateTo({
            url: props.backUrl
          });
        }
      } else {
        common_vendor.index.navigateBack();
      }
    };
    const isTabBarUrl = (url) => {
      const tabBarPages = ["/pages/Connection/Connection", "/pages/FunctionPage/FunctionPage2", "/pages/FunctionPage/FunctionPage3"];
      return tabBarPages.includes(url);
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(handleBack),
        c: common_vendor.t(__props.title)
      };
    };
  }
};
wx.createComponent(_sfc_main);

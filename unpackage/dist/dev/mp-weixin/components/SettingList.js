"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "SettingList",
  setup(__props) {
    const menuItems = [
      {
        id: 1,
        title: "设置",
        icon: "/static/images/setting.png",
        url: "/pages/Setting/Setting"
      },
      {
        id: 2,
        title: "操作指南",
        icon: "/static/images/operation.png",
        url: "/pages/zhinan/zhinan"
      },
      {
        id: 3,
        title: "关于我们",
        icon: "/static/images/about.png",
        url: "/pages/About/About"
      }
    ];
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({ url });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menuItems, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.id,
            d: common_vendor.o(($event) => navigateTo(item.url), item.id)
          };
        }),
        b: common_assets._imports_0$4
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55449abc"]]);
wx.createComponent(Component);

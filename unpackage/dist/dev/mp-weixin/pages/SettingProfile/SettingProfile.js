"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const _sfc_main = {
  __name: "SettingProfile",
  setup(__props) {
    const pageTitle = common_vendor.ref("个人信息");
    const menuItems = [
      {
        id: 1,
        title: "头像"
      },
      {
        id: 2,
        title: "昵称"
      },
      {
        id: 3,
        title: "修改密码",
        url: "/pages/login/reset"
      }
    ];
    const navigateTo = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: pageTitle.value,
          backUrl: "/pages/FunctionPage/FunctionPage3"
        }),
        b: common_vendor.f(menuItems, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.title),
            b: item.title === "头像"
          }, item.title === "头像" ? {} : {}, {
            c: item.title === "昵称"
          }, item.title === "昵称" ? {} : {}, {
            d: item.title !== "头像"
          }, item.title !== "头像" ? {
            e: common_assets._imports_0$4
          } : {}, {
            f: item.id,
            g: common_vendor.o(($event) => navigateTo(item.url), item.id)
          });
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

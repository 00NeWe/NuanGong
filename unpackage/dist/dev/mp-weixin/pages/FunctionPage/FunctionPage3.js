"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  SettingsList();
}
const SettingsList = () => "../../components/SettingList.js";
const _sfc_main = {
  __name: "FunctionPage3",
  setup(__props) {
    const gotoSettingProfile = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Profile/Profile"
      });
    };
    const gotoReminders = () => {
      common_vendor.index.navigateTo({
        url: "/pages/reminders/reminders"
      });
    };
    const gotoEdit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/SettingProfile/SettingProfile"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.o(gotoEdit),
        c: common_assets._imports_1,
        d: common_vendor.o(gotoSettingProfile),
        e: common_assets._imports_2,
        f: common_vendor.o(gotoReminders)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1fba4405"]]);
wx.createPage(MiniProgramPage);

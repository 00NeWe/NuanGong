"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/Connection/Connection.js";
  "./pages/FunctionPage/FunctionPage2.js";
  "./pages/FunctionPage/FunctionPage3.js";
  "./pages/splash/splash.js";
  "./pages/login/index.js";
  "./pages/login/phone.js";
  "./pages/login/password.js";
  "./pages/login/reset.js";
  "./pages/Profile/Profile.js";
  "./pages/ConnectDevice/ConnectDevice.js";
  "./pages/riliye/riliye.js";
  "./pages/MenstrualRecord/MenstrualRecord.js";
  "./pages/Edit/Edit.js";
  "./pages/SettingProfile/SettingProfile.js";
  "./pages/reminders/reminders.js";
  "./pages/PwdReset/PwdReset.js";
  "./pages/About/About.js";
  "./pages/Setting/Setting.js";
  "./pages/ManageFr/ManageFr.js";
  "./pages/Manage/Manage.js";
  "./pages/zhinan/zhinan.js";
}
if (!Array) {
  const _component_router_view = common_vendor.resolveComponent("router-view");
  const _component_router_link = common_vendor.resolveComponent("router-link");
  (_component_router_view + _component_router_link)();
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          to: "/"
        }),
        b: common_vendor.p({
          to: "/function2"
        }),
        c: common_vendor.p({
          to: "/function3"
        })
      };
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f13b4d11"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

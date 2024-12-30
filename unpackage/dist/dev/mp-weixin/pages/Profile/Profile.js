"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const indicatorStyle = "height: 50px;";
const _sfc_main = {
  __name: "Profile",
  setup(__props) {
    const showPeriodPicker = common_vendor.ref(false);
    const periodDays = common_vendor.ref(30);
    const periodDaysIndex = common_vendor.ref(3);
    const periodDaysRange = Array.from({ length: 5 }, (_, i) => i + 27);
    const showMenstruationPicker = common_vendor.ref(false);
    const menstruationDays = common_vendor.ref(7);
    const menstruationDaysIndex = common_vendor.ref(3);
    const menstruationDaysRange = Array.from({ length: 5 }, (_, i) => i + 4);
    const handlePeriodDaysClick = () => {
      showPeriodPicker.value = true;
    };
    const closePeriodPicker = () => {
      showPeriodPicker.value = false;
    };
    const handlePeriodPickerChange = (e) => {
      periodDaysIndex.value = e.detail.value[0];
    };
    const savePeriodDays = () => {
      periodDays.value = periodDaysRange[periodDaysIndex.value];
      closePeriodPicker();
    };
    const handleMenstruationDaysClick = () => {
      showMenstruationPicker.value = true;
    };
    const closeMenstruationPicker = () => {
      showMenstruationPicker.value = false;
    };
    const handleMenstruationPickerChange = (e) => {
      menstruationDaysIndex.value = e.detail.value[0];
    };
    const saveMenstruationDays = () => {
      menstruationDays.value = menstruationDaysRange[menstruationDaysIndex.value];
      closeMenstruationPicker();
    };
    const handleConfirm = () => {
      common_vendor.index.switchTab({
        url: "/pages/FunctionPage/FunctionPage3"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "个人资料设置",
          backUrl: "/pages/FunctionPage/FunctionPage3"
        }),
        b: common_vendor.t(periodDays.value),
        c: common_vendor.o(handlePeriodDaysClick),
        d: common_vendor.t(menstruationDays.value),
        e: common_vendor.o(handleMenstruationDaysClick),
        f: common_vendor.o(handleConfirm),
        g: showPeriodPicker.value || showMenstruationPicker.value ? 1 : "",
        h: showPeriodPicker.value
      }, showPeriodPicker.value ? {
        i: common_vendor.o(closePeriodPicker),
        j: common_vendor.f(common_vendor.unref(periodDaysRange), (day, k0, i0) => {
          return {
            a: common_vendor.t(day),
            b: day
          };
        }),
        k: indicatorStyle,
        l: [periodDaysIndex.value],
        m: common_vendor.o(handlePeriodPickerChange),
        n: common_vendor.o(savePeriodDays)
      } : {}, {
        o: showMenstruationPicker.value
      }, showMenstruationPicker.value ? {
        p: common_vendor.o(closeMenstruationPicker),
        q: common_vendor.f(common_vendor.unref(menstruationDaysRange), (day, k0, i0) => {
          return {
            a: common_vendor.t(day),
            b: day
          };
        }),
        r: indicatorStyle,
        s: [menstruationDaysIndex.value],
        t: common_vendor.o(handleMenstruationPickerChange),
        v: common_vendor.o(saveMenstruationDays)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c73b8ec"]]);
wx.createPage(MiniProgramPage);

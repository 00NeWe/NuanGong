"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "phone",
  setup(__props) {
    const phoneNumber = common_vendor.ref("+8612345678900");
    const verificationCode = common_vendor.ref("");
    const currentFocusIndex = common_vendor.ref(0);
    const countdown = common_vendor.ref(0);
    let timer = null;
    const handleInput = (e) => {
      verificationCode.value = e.detail.value.slice(0, 6);
      currentFocusIndex.value = verificationCode.value.length;
      if (verificationCode.value.length === 6) {
        console.log("Verification code:", verificationCode.value);
      }
    };
    const handleFocus = () => {
      currentFocusIndex.value = verificationCode.value.length;
    };
    const startCountdown = () => {
      countdown.value = 60;
      timer = setInterval(() => {
        if (countdown.value > 0) {
          countdown.value--;
        } else {
          clearInterval(timer);
        }
      }, 1e3);
    };
    const handleResend = () => {
      startCountdown();
    };
    const goBack = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    };
    common_vendor.onMounted(() => {
      startCountdown();
    });
    common_vendor.onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.o(goBack),
        c: common_vendor.t(phoneNumber.value),
        d: common_vendor.f(6, (digit, index, i0) => {
          return {
            a: common_vendor.t(verificationCode.value[index] || ""),
            b: index,
            c: currentFocusIndex.value === index ? 1 : ""
          };
        }),
        e: common_vendor.o([($event) => verificationCode.value = $event.detail.value, handleInput]),
        f: common_vendor.o(handleFocus),
        g: verificationCode.value,
        h: common_vendor.o(handleResend)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c7f9892b"]]);
wx.createPage(MiniProgramPage);

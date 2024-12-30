"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "ConnectedContent",
  setup(__props) {
    const isPlaying = common_vendor.ref(false);
    const isDeviceOn = common_vendor.ref(true);
    const isMassageOn = common_vendor.ref(false);
    const isHeatOn = common_vendor.ref(false);
    common_vendor.ref(50);
    common_vendor.ref(50);
    common_vendor.ref(45);
    const showModal = common_vendor.ref(false);
    const timerOptions = [30, 60, 90, 120];
    const selectedDuration = common_vendor.ref(null);
    function togglePlay() {
      isPlaying.value = !isPlaying.value;
    }
    const toggleDevice = (e) => {
      isDeviceOn.value = e.detail.value;
    };
    const toggleMassage = (e) => {
      isMassageOn.value = e.detail.value;
    };
    const toggleHeat = (e) => {
      isHeatOn.value = e.detail.value;
    };
    const showTimerModal = () => {
      showModal.value = true;
    };
    const closeModal = () => {
      showModal.value = false;
    };
    const selectDuration = (duration) => {
      selectedDuration.value = duration;
    };
    const confirmTimer = () => {
      if (selectedDuration.value) {
        console.log(`Timer set for ${selectedDuration.value} minutes`);
      }
      closeModal();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isDeviceOn.value,
        b: common_vendor.o(toggleDevice),
        c: common_vendor.o(showTimerModal),
        d: isPlaying.value
      }, isPlaying.value ? {} : {}, {
        e: common_vendor.o(togglePlay),
        f: isPlaying.value ? "#FFD5C5" : "#E8E8E8",
        g: common_assets._imports_0$7,
        h: isMassageOn.value,
        i: common_vendor.o(toggleMassage),
        j: isHeatOn.value,
        k: common_vendor.o(toggleHeat),
        l: showModal.value
      }, showModal.value ? {
        m: common_vendor.f(timerOptions, (duration, k0, i0) => {
          return {
            a: common_vendor.t(duration),
            b: duration,
            c: common_vendor.o(($event) => selectDuration(duration), duration)
          };
        }),
        n: common_vendor.o(confirmTimer),
        o: common_vendor.o(() => {
        }),
        p: common_vendor.o(closeModal)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-991293d9"]]);
wx.createComponent(Component);

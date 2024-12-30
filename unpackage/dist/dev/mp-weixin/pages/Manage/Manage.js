"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const _sfc_main = {
  __name: "Manage",
  setup(__props) {
    const avatarUrl = common_vendor.ref("");
    const cooldown = common_vendor.ref(0);
    const formData = common_vendor.ref({
      nickname: "",
      relationship: "",
      phone: "",
      verifyCode: ""
    });
    const isPhoneValid = common_vendor.computed(() => {
      return /^1[3-9]\d{9}$/.test(formData.value.phone);
    });
    const handleAvatarClick = async () => {
      try {
        const res = await common_vendor.index.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["album", "camera"]
        });
        avatarUrl.value = res.tempFilePaths[0];
      } catch (error) {
        common_vendor.index.showToast({
          title: "选择图片失败",
          icon: "none"
        });
      }
    };
    const handleSendVerifyCode = () => {
      if (!isPhoneValid.value) {
        common_vendor.index.showToast({
          title: "请输入正确的手机号",
          icon: "none"
        });
        return;
      }
      cooldown.value = 60;
      const timer = setInterval(() => {
        cooldown.value--;
        if (cooldown.value <= 0) {
          clearInterval(timer);
        }
      }, 1e3);
      common_vendor.index.showToast({
        title: "验证码已发送",
        icon: "success"
      });
    };
    const handleSubmit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/reminders/reminders"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "添加亲友",
          backUrl: "/pages/reminders/reminders"
        }),
        b: common_assets._imports_0$5,
        c: common_vendor.o(handleAvatarClick),
        d: formData.value.nickname,
        e: common_vendor.o(($event) => formData.value.nickname = $event.detail.value),
        f: formData.value.relationship,
        g: common_vendor.o(($event) => formData.value.relationship = $event.detail.value),
        h: formData.value.phone,
        i: common_vendor.o(($event) => formData.value.phone = $event.detail.value),
        j: common_vendor.t(cooldown.value > 0 ? `${cooldown.value}s` : "验证码"),
        k: common_vendor.o(handleSendVerifyCode),
        l: !isPhoneValid.value || cooldown.value > 0 ? 1 : "",
        m: formData.value.verifyCode,
        n: common_vendor.o(($event) => formData.value.verifyCode = $event.detail.value),
        o: common_vendor.o(handleSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-465d7a75"]]);
wx.createPage(MiniProgramPage);

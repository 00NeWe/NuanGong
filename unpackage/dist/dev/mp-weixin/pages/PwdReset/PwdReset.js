"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  Nav();
}
const Nav = () => "../../components/nav.js";
const maxImages = 9;
const _sfc_main = {
  __name: "PwdReset",
  emits: ["submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const pageTitle = common_vendor.ref("意见反馈");
    const feedbackText = common_vendor.ref("");
    const images = common_vendor.ref([]);
    const isLoading = common_vendor.ref(false);
    const chooseImage = () => {
      common_vendor.index.chooseImage({
        count: maxImages - images.value.length,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          images.value = [...images.value, ...res.tempFilePaths];
        }
      });
    };
    const deleteImage = (index) => {
      images.value.splice(index, 1);
    };
    const handleSubmit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/About/About"
      });
    };
    __expose({
      feedbackText,
      images
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: pageTitle.value,
          backUrl: "/pages/About/About"
        }),
        b: feedbackText.value,
        c: common_vendor.o(($event) => feedbackText.value = $event.detail.value),
        d: common_vendor.f(images.value, (image, index, i0) => {
          return {
            a: image,
            b: common_vendor.o(($event) => deleteImage(index), index),
            c: index
          };
        }),
        e: images.value.length < maxImages
      }, images.value.length < maxImages ? {
        f: common_vendor.o(chooseImage)
      } : {}, {
        g: isLoading.value,
        h: common_vendor.o(handleSubmit)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f0bbd7f3"]]);
wx.createPage(MiniProgramPage);

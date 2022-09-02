<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
  /* 每个页面公共样式，variable 和 mixins 这些在 uni.scss 中全局引用 */
  @import "./styles/index.scss";
  @import "./styles/loading.scss";
  /* 去除滚动条样式 */
  ::-webkit-scrollbar {
    display: none;
  }
  /* 改变swiper下面导航点样式 */
  .uni-swiper-dot{
    border-radius: 0% !important;
    width: 12rpx;
    height: 12rpx;

  }
  //设置省市区选择器高度 和定位位置
  .uni-data-tree-dialog{
    top: 50% !important;
    height: 400px !important;
  }
  </style>

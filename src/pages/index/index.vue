<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">Login Status: {{ isLogined }}</text>
    </view>
    <view v-if="isLogined">
      <text>Go to: </text>
      <navigator url="../demo/index">Demo Users</navigator>
    </view>
    <view v-else>
      <button type="primary" @click="login" :loading="loginLoading">登陆</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import useUserStore from "@/store/user"

const store = useUserStore()
const { getLoginStatus: isLogined, loginLoading } = storeToRefs(store)
const { login } = store

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

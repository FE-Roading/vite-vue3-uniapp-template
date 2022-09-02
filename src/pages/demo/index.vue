<template>
  <view class="pg-demo">
    <view class="demo-head">
      <text>pinia state name: {{ storeName }}</text>
      <text>pinia getter activeUser: {{ getActiveUser?.name }}</text>
    </view>
    <UserList className="demo-users" />
  </view>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { onMounted } from "vue"

import useDemoStore from "@/store/demo"

import UserList from "./UserList.vue"

const store = useDemoStore()
const { name: storeName, getActiveUser } = storeToRefs(store)
const { getUserList } = store

onMounted(() => {
  getUserList()
})

</script>
<style lang="scss">
.pg-demo {
  .demo {
    &-head {
      margin-bottom: 20rpx;
    }

    &-users {
      margin: 0 20rpx;
    }
  }
}
</style>

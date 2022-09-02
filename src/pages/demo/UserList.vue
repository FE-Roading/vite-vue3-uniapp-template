<template>
  <view :class="clsObj">
    <view class="demo-users__item" v-for="user in users" :key="user.name">
      <text>name: {{ user.name }},</text>
      <text>label: {{ user.label }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { storeToRefs } from "pinia"

import useDemoStore from "@/store/demo"

type IndexProps = {
  className?: string
}

const props = defineProps<IndexProps>()

const { users } = storeToRefs(useDemoStore())
const clsObj = computed(() => ["pc-demo-users", props.className])

</script>
<style lang="scss">
.pc-demo-users {
  .demo-users {
    &__item {
      padding: 20rpx;
      margin-bottom: 10rpx;
      border: 1px solid #ccc;
      border-radius: 5rpx;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

</style>

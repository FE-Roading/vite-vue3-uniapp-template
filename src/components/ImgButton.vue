<template>
	<view v-bind="attrs" @tap="onTap" class="classObj">
		<image :src="props.src" />
	</view>
</template>

<script lang="ts" setup>
	import { useAttrs, computed } from "vue"

  type IndexProps = {
    src: string
    className?: string
  }
  const props = defineProps<IndexProps>()
  const attrs = useAttrs()
  const emit = defineEmits<{
    (type: "tap"): void
  }>()
  const classObj = computed(() => ["com-img-button", props.className])

  function onTap() {
    emit("tap")
  }

</script>

<style>

</style>

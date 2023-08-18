<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  action: String,
  output: String
})
</script>

<template>
  <div class="flex flex-col gap-0">
    <!-- 标题 -->
    <div class="flex gap-2">
      <div class="flex-none w-6 flex justify-center">
        <InformationCircleIcon class="w-6 h-6 text-gray-600"></InformationCircleIcon>
      </div>
      <div class="grow">{{ action }}</div>
    </div>
    <!-- 内容 -->
    <div class="flex gap-2">
      <div class="flex-none w-6 flex justify-center">
        <div class="w-0.5 h-full bg-slate-200"></div>
      </div>
      <div class="grow mb-5 text-gray-400">
        <article class="w-full prose prose-sm whitespace-pre-line break-words">
          {{ output }}
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { MyBotCardItem } from '@/components/bots'
import { getBots } from '@/api/api.js'
import { onMounted, ref } from 'vue'

// 机器人列表
const bots = ref('')

onMounted(async () => {
  let res = await getBots()
  if (res['status'] == 200) {
    bots.value = res['data']
  }
})
</script>

<template>
  <div>
    <!-- 提示信息 -->
    <div class="alert h-14 my-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>该项目处在早期阶段，会有很多不稳定的情况。</span>
    </div>
    <!-- 机器人列表 -->
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-4"
    >
      <template v-for="bot in bots">
        <my-bot-card-item :bot-info="bot"></my-bot-card-item>
      </template>
    </div>
  </div>
</template>

<script setup>
import MyBotCardItem from '@/components/MyBotCardItem.vue'
import { getBots } from '@/api/api.js'
import { onMounted, ref } from 'vue'

// 机器人列表
const bots = ref('')

onMounted(async () => {
  let res = await getBots()
  if (res['status'] == 200) {
    bots.value = res["data"]
  }
})
</script>

<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-4">
    <template v-for="bot in bots">
      <MyBotCardItem :bot-info="bot"></MyBotCardItem>
    </template>
  </div>
</template>

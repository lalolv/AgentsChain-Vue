<script setup>
import { ref, onMounted } from 'vue'
import MyChatList from '@/components/MyChatList.vue'
import MyChatSend from '@/components/MyChatSend.vue'
import MyChatBot from '@/components/MyChatBot.vue'
import MyChatPrompts from '@/components/MyChatPrompts.vue'
import { useChatStore } from '@/stores/chat'
import { getBotDetail } from '@/api/api'
import { useRoute } from 'vue-router'

const route = useRoute()

const store = useChatStore()
const chatlist = ref(null)
const botInfo = ref({})

onMounted(async () => {
  let res = await getBotDetail(route.params.id)
  if (res['status'] == 200) {
    botInfo.value = res["data"]
  }
})

// 监听状态的变化
store.$subscribe((_, state) => {
  if (state.conversation.length > 0) {
    chatlist.value.scrollTo(0, chatlist.value.scrollHeight)
  }
})
</script>

<template>
  <div class="w-full flex h-screen">
    <!-- AI 信息 -->
    <MyChatBot class="flex-none w-60 overflow-auto" :botInfo="botInfo"></MyChatBot>
    <!-- 聊天 -->
    <div class="grow flex flex-col gap-1 bg-slate-200">
      <div ref="chatlist" class="grow overflow-auto px-4">
        <MyChatList></MyChatList>
      </div>
      <div class="grow-0 px-4">
        <MyChatSend></MyChatSend>
      </div>
    </div>
    <!-- 预设提示词 -->
    <MyChatPrompts class="flex-none w-80 overflow-auto" :prompts="botInfo.prompts"></MyChatPrompts>
  </div>
</template>

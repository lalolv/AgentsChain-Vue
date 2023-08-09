<script setup>
import { ref, onMounted } from 'vue'
import {MyChatList, MyChatSend, MyChatBot, MyChatPrompts} from '@/components/chat'
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
    <my-chat-bot class="flex-none w-60 overflow-auto" :botInfo="botInfo"></my-chat-bot>
    <!-- 聊天 -->
    <div class="grow flex flex-col gap-1 bg-slate-200">
      <!-- 对话列表 -->
      <div ref="chatlist" class="grow overflow-auto px-4">
        <my-chat-list v-if="store.conversation.length > 0"></my-chat-list>
        <!-- 默认提示 -->
        <div v-else class="grow hero">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold">AppChain.AI</h1>
              <p class="py-6">创建自己的 AI 代理，连接 LLM 并访问不同的接口。</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 发送消息 -->
      <div class="grow-0 px-4">
        <my-chat-send></my-chat-send>
      </div>
    </div>
    <!-- 预设提示词 -->
    <my-chat-prompts class="flex-none w-80 overflow-auto" :prompts="botInfo.prompts"></my-chat-prompts>
  </div>
</template>

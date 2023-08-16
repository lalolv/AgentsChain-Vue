<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {MyChatList, MyChatSend, MyChatBot, MyChatPrompts, MyPromptCard} from '@/components/chat'
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

onUnmounted(async () => {
  store.conversation = []
  store.resetPrompt()
  store.resetToken()
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
          <div class="w-full hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-2xl">尝试这些提示词</h1>
              <div class="my-8 w-full grid grid-cols-2 gap-2">
                <template v-for="p in botInfo.prompts">
                  <my-prompt-card :name="p.name" :desc="p.desc"></my-prompt-card>
                </template>
              </div>
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

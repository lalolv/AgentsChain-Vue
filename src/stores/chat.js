import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  // 对话列表
  const conversation = ref([])

  // 添加新的聊天记录
  function add(role, content) {
    conversation.value.unshift({
      role: role,
      content: content
    })
  }

  return { conversation, add }
})

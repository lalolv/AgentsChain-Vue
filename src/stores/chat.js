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

  // 更新数组最后一个元素
  function updateLast(reply) {
    conversation.value[conversation.value.length - 1] = {
      role: 'bot',
      content: reply
    }
  }

  return { conversation, add, updateLast }
})

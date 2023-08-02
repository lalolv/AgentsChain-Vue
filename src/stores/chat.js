import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  // 对话列表
  const conversation = ref([])

  // action：loading reply

  // 添加新的聊天记录
  function add(role, content, action) {
    conversation.value.push({
      role: role,
      content: content,
      action: action
    })
  }

  // 更新数组最后一个元素
  function updateLast(reply, action) {
    conversation.value[conversation.value.length - 1] = {
      role: 'bot',
      content: reply,
      action: action
    }
  }

  return { conversation, add, updateLast }
})

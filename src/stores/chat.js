import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  // 对话列表
  const conversation = ref([])
  // 机器人状态
  const botStatus = ref('ready')

  // 本地聊天记录

  // 添加新的聊天记录
  function add(role, content) {
    conversation.value.unshift({
      role: role,
      content: content
    })
  }

  // 更新数组最后一个元素
  function updateLast(reply) {
    conversation.value[0] = {
      role: 'bot',
      content: reply
    }
  }

  // 更新机器人状态
  // ready loading complete
  function updateBotStatus(status) {
    botStatus.value = status
  }

  return { conversation, add, botStatus, updateBotStatus, updateLast }
})

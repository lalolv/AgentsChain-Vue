import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  // 对话列表
  const conversation = ref([])
  // 当前输入的prompt
  const prompt = ref('')
  // 思维链
  const chains = ref([])

  // 添加新的聊天记录
  function add(role, content, action) {
    conversation.value.push({
      role: role,
      content: content,
      action: action
    })
  }

  // Update current prompt
  function updatePrompt(params) {
    prompt.value = params
  }

  function resetPrompt() {
    prompt.value = ''
  }

  // 更新数组最后一个元素
  function updateLast(reply, action) {
    conversation.value[conversation.value.length - 1] = {
      role: 'bot',
      content: reply,
      action: action
    }
  }

  // 更新思维链
  function addChain(action, output) {
    chains.value.push({
      action: action,
      output: output
    })
  }

  // 更新思维链
  function updateChain(action, output) {
    chains.value[chains.value.length - 1] = {
      action: action,
      output: output
    }
  }

  return {
    conversation,
    prompt,
    chains,
    add,
    updateLast,
    updatePrompt,
    resetPrompt,
    addChain,
    updateChain,
  }
})

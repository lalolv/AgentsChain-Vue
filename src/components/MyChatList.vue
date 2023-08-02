<script setup>
import { onMounted } from 'vue'
import MyChatItem from './MyChatItem.vue'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()

// 加载默认的对话
onMounted(() => {
  store.conversation = [
    {
      role: 'user',
      content: '1 Itooo was said that you would, destroy the Sith, not join them.',
      action: 'reply'
    },
    {
      role: 'ai',
      content: 'Itooo was said',
      action: 'reply'
    },
  ]
})
</script>

<template>
  <div class="flex flex-col">
    <template v-for="item in store.conversation">
      <MyChatItem :role="item.role" :content="item.content" :action="item.action"></MyChatItem>
    </template>
  </div>
</template>

<style scoped></style>

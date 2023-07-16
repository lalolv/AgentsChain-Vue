<script setup>
import { onMounted } from 'vue'
import MyChatItem from './MyChatItem.vue';
import { useChatStore } from '@/stores/chat'

const store = useChatStore()

// 加载默认的对话
onMounted(() => {
  store.conversation = [
    {
      role: 'user',
      content: '1 Itooo was said that you would, destroy the Sith, not join them.'
    },
    {
      role: 'ai',
      content: '2 Itooo was said that you would, destroy the Sith, not join them.'
    },
    {
      role: 'user',
      content: '3 Itooo was said that you would, destroy the Sith, not join them.'
    },
    {
      role: 'system',
      content: '4 Itooo was said that you would, destroy the Sith, not join them.'
    },
  ]
})

</script>

<template>
  <div class="flex flex-col-reverse w-3/4 pb-24">
    <template v-for="item in store.conversation">
      <MyChatItem :role="item.role" :content="item.content"></MyChatItem>
    </template>
  </div>
</template>

<style scoped></style>

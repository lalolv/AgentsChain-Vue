<script setup>
import { onMounted } from 'vue'
import MyChatItem from './MyChatItem.vue'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()

// 加载默认的对话
onMounted(async () => {})

</script>

<template>
  <div class="flex flex-col">
    <template v-for="(item, index) in store.conversation">
      <MyChatItem
        :chat-id="index"
        :role="item.role"
        :content="item.content"
        :action="item.action"
        :metadata="item.metadata"
      ></MyChatItem>
    </template>
  </div>
</template>

<style scoped></style>

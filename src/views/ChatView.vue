<script setup>
import { ref, onMounted } from 'vue'
import MyChatList from '@/components/MyChatList.vue'
import MyChatSend from '@/components/MyChatSend.vue'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()
const chatlist = ref(null)

onMounted(() => {
  // chatlist.value.scrollTo(0, 100)
})

// 监听状态的变化
store.$subscribe((_, state) => {
  if (state.conversation.length > 0) {
    chatlist.value.scrollTo(0, chatlist.value.scrollHeight)
  }
})

</script>

<template>
  <div class="flex flex-col h-screen w-3/4">
    <div ref="chatlist" class="grow overflow-auto">
      <MyChatList></MyChatList>
    </div>
    <div class="grow-0">
      <MyChatSend></MyChatSend>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PaperAirplaneIcon, ArrowUpOnSquareStackIcon } from '@heroicons/vue/24/solid'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()

// 消息内容
const message = ref('')

// 发送消息
function send() {
  if (message.value != '') {
    console.log(message.value)
    store.add('user', message.value)
    message.value = ''
  }
}
</script>

<template>
  <!-- 发送消息 -->
  <div class="flex gap-2 items-center">
    <!-- 历史 -->
    <div class="btn btn-circle">
      <ArrowUpOnSquareStackIcon class="w-5 h-5"></ArrowUpOnSquareStackIcon>
    </div>
    <!-- 消息内容 -->
    <input
      type="text"
      placeholder="Type here"
      class="grow w-full input input-bordered input-md"
      v-model="message"
    />
    <!-- 发送按钮 -->
    <div class="btn btn-primary btn-circle">
      <PaperAirplaneIcon class="w-5 h-5" @click="send"></PaperAirplaneIcon>
    </div>
  </div>
  <!-- 底部提示信息 -->
  <div class="flex justify-center my-1">
    <div>
      Press <kbd class="kbd kbd-sm">ctrl</kbd>/<kbd class="kbd kbd-sm">⌘</kbd>+<kbd
        class="kbd kbd-sm"
        >Enter</kbd
      >
      to send message.
    </div>
  </div>
</template>

<style scoped></style>

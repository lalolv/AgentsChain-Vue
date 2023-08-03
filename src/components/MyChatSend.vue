<script setup>
import { ref } from 'vue'
import { PaperAirplaneIcon, ArrowUpOnSquareStackIcon } from '@heroicons/vue/24/solid'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()

// 消息内容
// const message = ref('')
// socket
const socket = ref(null)
const wssURL = ref('ws://192.168.3.15:8080/chat/completion/64c21a57441b03c2db97f04d')
// 回复消息内容
// const reply = ref('')

// 发送消息
function send() {
  if (store.prompt !== '') {
    // 创建 socket 连接
    socket.value = new WebSocket(wssURL.value)
    // 连接成功
    socket.value.onopen = onOpen
    // 连接失败
    socket.value.onerror = (evt) => {
      console.log('WebSocket connection error:', evt)
      socket.value = null
    }
    // 连接关闭
    socket.value.onclose = (evt) => {
      console.log('WebSocket connection closed:', evt)
      socket.value = null
    }
    // 监听消息
    socket.value.onmessage = onMessage
  }
}

// 打开 WS 连接
function onOpen(evt) {
  console.log('WebSocket connection opened:', evt)
  // console.log('Message:', message)
  if (store.prompt !== '') {
    // send message
    const msg = {
      question: store.prompt
    }
    socket.value.send(JSON.stringify(msg))
    // 添加到状态
    store.add('user', store.prompt, 'input')
    // 重置为空字符
    store.updatePrompt('')
    // 添加默认的加载状态
    store.add('bot', "", 'loading')
  }
}

// 监听消息
// data: {result, error, stout}
function onMessage(evt) {
  let data = JSON.parse(evt.data)
  console.log('act:', data.action);
  if (data.action == 'tool_start') {
    store.updateLast(data.outputs, 'tool')
  }
  // reply.value += data.outputs
  // console.log('reply:', reply.value)
  if (data.action == 'result') {
    store.updateLast(data.outputs, 'reply')
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
      v-model="store.prompt"
    />
    <!-- 发送按钮 -->
    <div class="btn btn-primary btn-circle" @click="send">
      <PaperAirplaneIcon class="w-5 h-5"></PaperAirplaneIcon>
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

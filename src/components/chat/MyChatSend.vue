<script setup>
import { ref } from 'vue'
import { PaperAirplaneIcon, ArrowUpOnSquareStackIcon } from '@heroicons/vue/24/solid'
import { useChatStore } from '@/stores/chat'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const store = useChatStore()

// 对话状态
const isLoading = ref(false)
// socket
const socket = ref(null)
const wssURL = ref(import.meta.env.VITE_WS_API + '/chat/completion/' + route.params.id)
// 回复消息内容
const lastContent = ref('')
const lastMetadata = ref({})
const lastAction = ref('')
const tokens = ref('')
const upfile = ref(null)

// 发送消息
function send() {
  // 判断加载状态
  // if (isLoading.value) {
  //   return
  // }
  // 发送提示词
  if (store.prompt !== '') {
    isLoading.value = true
    // 创建 socket 连接
    socket.value = new WebSocket(wssURL.value)
    // 连接成功
    socket.value.onopen = onOpen
    // 连接失败
    socket.value.onerror = (evt) => {
      console.log('WebSocket connection error:', evt)
      socket.value = null
      isLoading.value = false
    }
    // 连接关闭
    socket.value.onclose = (evt) => {
      console.log('WebSocket connection closed:', evt)
      // 更新最后消息内容
      store.updateLast(lastContent.value, 'reply', lastMetadata.value)
      socket.value = null
      isLoading.value = false
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
    store.resetPrompt()
    // 添加默认的加载状态
    store.add('bot', '', 'loading')
    // 请空之前的链
    store.chains = []
  }
}

// 监听消息
// data: {result, error, stout}
function onMessage(evt) {
  let data = JSON.parse(evt.data)
  if (data.action == 'on_agent_finish') {
    // 更新会话
    lastContent.value = data.outputs
    // socket.value.close();
  } else if (data.action == 'metadata') {
    lastMetadata.value = data.outputs
  } else {
    if (data.action === 'token') {
      tokens.value += data.outputs
      store.updateChain(lastAction.value, tokens.value)
    } else {
      lastAction.value = data.action
      tokens.value = ""
      store.addChain(data.action, data.outputs)
    }
    // 更新中间的加载状态信息
    store.updateLast(data.action, 'loading', lastMetadata.value)
  }
}

function selectFile() {
  upfile.value.click();
}

function selectedFile(evt) {
  const file = evt.target.files[0];
  console.log(file.name);
  uploadFile(file)
}

function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = axios.post('http://127.0.0.1:8080/agent/upload/rag', formData, {
      headers: {"Content-Type": "multipart/form-data"},
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <!-- 发送消息 -->
  <div class="flex gap-2 items-center">
    <!-- 上传文件 -->
    <div class="btn btn-circle btn-sm">
      <input ref="upfile" type="file" accept="*" class="hidden" @change="selectedFile">
      <ArrowUpOnSquareStackIcon class="w-5 h-5" @click="selectFile"></ArrowUpOnSquareStackIcon>
    </div>
    <!-- 消息内容 -->
    <input
      type="text"
      placeholder="Type here"
      class="grow w-full input input-bordered input-md"
      v-model="store.prompt"
    />
    <!-- 发送按钮 -->
    <div class="btn btn-ghost btn-circle btn-sm swap swap-rotate" 
      :class="{'swap-active':isLoading}" @click="send">
      <!-- this hidden checkbox controls the state -->
      <span class="swap-on loading loading-spinner"></span>
      <PaperAirplaneIcon class="swap-off w-5 h-5"></PaperAirplaneIcon>
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

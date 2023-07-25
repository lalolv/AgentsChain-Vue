<script setup>
import { computed } from 'vue'

const props = defineProps({
  role: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

// 一个计算属性 ref
// http://qn-dev.gd40.cn/apple-touch-icon.png
// https://tupian.qqw21.com/article/UploadPic/2020-5/202052623103460996.jpg
const showAvatar = computed(() => {
  return props.role == 'user'
    ? 'https://tupian.qqw21.com/article/UploadPic/2020-5/202052623103460996.jpg'
    : 'http://qn-dev.gd40.cn/apple-touch-icon.png'
})
</script>

<template>
  <div class="chat w-full" :class="[role == 'user' ? 'chat-end' : 'chat-start']">
    <!-- 头像 -->
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img :src="showAvatar" />
      </div>
    </div>
    <!-- 内容 -->
    <div class="chat-bubble" :class="[role == 'user' ? 'chat-bubble-primary' : 'chat-bubble-accent']">
      {{ content }}
    </div>
  </div>
</template>

<style scoped></style>

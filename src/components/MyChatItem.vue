<script setup>
import { computed } from 'vue'
import { MdPreview } from 'md-editor-v3';
// import 'md-editor-v3/lib/preview.css';

const props = defineProps({
  chatId: Number,
  role: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  footer: {
    type: String,
    required: false
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
    <!-- 头部信息 -->
    <div class="chat-header">
      Update
      <time class="text-xs opacity-50">12:45</time>
    </div>
    <!-- 内容 -->
    <div class="chat-bubble" :class="[role == 'user' ? 'chat-bubble-primary' : 'chat-bubble-secondary']">
      <article class="prose prose-sm">
        <MdPreview :editorId="`${role}-${chatId}`" :modelValue="content" />
      </article>
      <span v-if="action === 'loading'" class="loading loading-dots loading-sm"></span>
    </div>
    <!-- 底部信息 -->
    <div class="chat-footer opacity-50">
      {{ footer }}
    </div>
  </div>
</template>

<style scoped></style>

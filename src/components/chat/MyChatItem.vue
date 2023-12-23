<script setup>
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
  metadata: {
    type: Object,
    required: false
  },
  footer: {
    type: String,
    required: false
  }
})

</script>

<template>
  <div class="chat w-full" :class="[role == 'user' ? 'chat-end' : 'chat-start']">
    <!-- 头部信息 -->
    <div class="chat-header">
      Update
      <time class="text-xs opacity-50">12:45</time>
    </div>
    <!-- 内容 -->
    <div class="chat-bubble" :class="[role == 'user' ? 'chat-bubble-primary' : 'chat-bubble-secondary']">
      <article class="prose prose-sm">
        <div class="flex flex-row gap-2">
          <!-- loading -->
          <span v-if="action === 'loading'" class="loading loading-spinner loading-xs"></span>
          <md-preview :editorId="`${role}-${chatId}`" :modelValue="content" />
        </div>
      </article>
      <!-- metadata -->
      <template v-if="metadata != null">
        <a v-if="metadata.source != null" class="link">{{ metadata.source }}</a>
        <a v-if="metadata.image != null" class="link">Image</a>
      </template>
      
    </div>
    <!-- 底部信息 -->
    <div class="chat-footer opacity-50">
      {{ footer }}
    </div>
  </div>
</template>

<style scoped></style>

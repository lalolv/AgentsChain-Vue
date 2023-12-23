<script setup>
import MyPromptsItem from '@/components/chat/MyPromptsItem.vue'

</script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-xl font-semibold">预设提示词</h1>
  </div>
  <div class="my-2">
    <!-- 提示词 -->
    <MyPromptsItem name="Prompt1" prompt="This is a Prompt!"></MyPromptsItem>
    <MyPromptsItem name="Prompt1" prompt="This is a Prompt!"></MyPromptsItem>
    <MyPromptsItem name="Prompt1" prompt="This is a Prompt!"></MyPromptsItem>
    <MyPromptsItem name="Prompt1" prompt="This is a Prompt!"></MyPromptsItem>
  </div>
</template>

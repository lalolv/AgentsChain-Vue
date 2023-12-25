<script setup>
import MyPromptItem from './MyPromptItem.vue'
import { getPrompts } from '@/api/widget.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 提示词列表
const prompts = ref('')

onMounted(async () => {
  let res = await getPrompts(route.params.id)
  if (res['status'] == 200) {
    prompts.value = res['data']
  }
})
</script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-xl font-semibold">预设提示词</h1>
  </div>
  <div class="my-2">
    <!-- 提示词 -->
    <template v-for="p in prompts">
      <MyPromptItem :name="p.name" :prompt="p.prompt"></MyPromptItem>
    </template>
  </div>
</template>

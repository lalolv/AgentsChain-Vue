<script setup>
import { useChatStore } from '@/stores/chat'
import { HashtagIcon } from '@heroicons/vue/24/solid'

const store = useChatStore()

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  }
})

// Select a prompt
// uodate store
function select() {
  store.updatePrompt(props.prompt)
}
</script>
<template>
  <article
    class="box-content bg-white rounded-lg prose prose-sm prose-gray p-5 cursor-pointer transition ease-in-out hover:shadow-md hover:-translate-y-1"
    @click="select"
  >
    <!-- title -->
    <div class="flex items-center gap-2">
      <HashtagIcon class="w-6 h-6" />
      <div class="font-bold text-base truncate">{{ name }}</div>
    </div>
    <!-- content -->
    <p class="line-clamp-3">
      {{ prompt }}
    </p>
  </article>
</template>

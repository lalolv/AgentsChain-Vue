<script setup>
import { useChatStore } from '@/stores/chat'

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
    class="box-content border-2 rounded-lg prose prose-sm prose-gray p-2 mx-4 my-2 cursor-pointer transition ease-in-out hover:shadow-md hover:-translate-y-1"
    @click="select"
  >
    <h4 class="line-clamp-1">{{ name }}</h4>
    <p class="line-clamp-3">
      {{ prompt }}
    </p>
  </article>
</template>

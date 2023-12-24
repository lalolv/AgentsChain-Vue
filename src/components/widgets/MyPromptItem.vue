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
  <div
    class="rounded-lg p-2 my-2 cursor-pointer 
    transition ease-in-out hover:shadow-md hover:-translate-y-1"
    @click="select"
  >
    <h4 class="line-clamp-1 text-lg text-gray-600">{{ name }}</h4>
    <p class="line-clamp-3 text-base text-gray-400">
      {{ prompt }}
    </p>
  </div>
</template>

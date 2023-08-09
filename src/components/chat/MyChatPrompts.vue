<script setup>
import MyPromptsItem from './MyPromptsItem.vue'

const props = defineProps({
  prompts: Array
})
</script>

<template>
  <div class="">
    <!-- Header -->
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">预设提示词</a>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- List -->
    <div>
      <template v-for="p in prompts">
        <MyPromptsItem :name="p.name" :desc="p.desc"></MyPromptsItem>
      </template>
    </div>
  </div>
</template>

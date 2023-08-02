<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>
<template>
  <article class="box-content border-2 rounded-lg prose prose-sm prose-gray p-2 mx-4 my-2">
    <h4 class="line-clamp-1">{{ name }}</h4>
    <p class="line-clamp-3">
      {{ desc }}
    </p>
  </article>
</template>

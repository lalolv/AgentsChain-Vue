<script setup>
defineProps({
  role: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="chat w-full" :class="[role]">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img src="../assets/avatar.jpg" />
      </div>
    </div>
    <div class="chat-bubble">
        Itooo was said that you would, destroy the Sith, not join them.\n\n
        Itooo was said that you would, destroy the Sith, not join them.\n\n
        Itooo was said that you would, destroy the Sith, not join them.\n\n
        Itooo was said that you would, destroy the Sith, not join them.
    </div>
  </div>
</template>

<style scoped></style>

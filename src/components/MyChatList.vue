<script setup>
import MyChatItem from './MyChatItem.vue';
</script>

<template>
  <div class="flex flex-col-reverse w-3/4 pb-24">
    <MyChatItem role="chat-end"></MyChatItem>
    <MyChatItem role="chat-start"></MyChatItem>
    <MyChatItem role="chat-end"></MyChatItem>
    <MyChatItem role="chat-start"></MyChatItem>
    <MyChatItem role="chat-end"></MyChatItem>
    <MyChatItem role="chat-start"></MyChatItem>
  </div>
</template>

<style scoped></style>

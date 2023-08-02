<script setup>
import {
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/solid'
import MyMenuItem from './MyMenuItem.vue'
</script>

<template>
  <div class="menu flex-col h-full">
    <!-- Logo -->
    <div class="flex-none grid justify-center">
      <img class="object-cover w-14 h-14" src="@/assets/logo.svg" />
    </div>
    <!-- Menu list -->
    <ul class="grow mt-6">
      <MyMenuItem path="bots" is-active="true" :icon-com="ChatBubbleBottomCenterTextIcon"></MyMenuItem>
      <MyMenuItem path="tools" :icon-com="ChartBarIcon"></MyMenuItem>
      <MyMenuItem path="about" :icon-com="WrenchScrewdriverIcon"></MyMenuItem>
    </ul>
    <!-- Avatar -->
    <div class="flex-none avatar grid justify-center">
      <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="@/assets/avatar.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

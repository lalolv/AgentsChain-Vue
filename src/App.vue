<script setup>
import { RouterView } from 'vue-router'
import MyMenu from '@/components/MyMenu.vue'
</script>

<template>
  <div class="bg-slate-600 h-screen flex">
    <!-- Left menu -->
    <div class="flex-none w-20 bg-slate-200">
      <MyMenu></MyMenu>
    </div>
    <!-- Main -->
    <div class="grow flex-col bg-slate-50 overflow-auto grid justify-items-center">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>

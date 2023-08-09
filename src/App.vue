<script setup>
import { RouterView } from 'vue-router'
import { MyMenu } from '@/components/menu'
</script>

<template>
  <div class="bg-slate-600 h-screen flex">
    <!-- Left menu -->
    <div class="flex-none w-20 bg-slate-200">
      <my-menu></my-menu>
    </div>
    <!-- Main -->
    <div class="grow flex-col bg-slate-50 grid justify-items-center overflow-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>

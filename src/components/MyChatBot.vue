<script setup>
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="">
    <!-- avatar 3D -->
    <div class="avatar">
      <!-- 返回按钮 -->
      <div class="fixed btn btn-xs btn-circle m-2">
        <ArrowLeftCircleIcon></ArrowLeftCircleIcon>
      </div>
      <div class="w-full">
        <img src="@/assets/avatar_3d.png" />
      </div>
    </div>
    <!-- name and desc -->
    <div class="px-2">
      <div class="text-2xl font-bold text-current text-center">Calculator</div>
      <div class="text-xs text-center text-slate-400">2023-7-25 出生</div>
      <div class="text-base line-clamp-5 text-center text-slate-500 mt-4">
        useful for when you need to answer questions about math
      </div>
    </div>
    <!-- stats -->
    <div class="divider"></div>
    <div class="">
      <div class="stat place-items-center">
        <div class="stat-title">LLM</div>
        <div class="stat-value text-slate-400">GPT 3.5</div>
        <div class="stat-desc">Azure OpenAI</div>
      </div>
    </div>
    <!-- skills -->
    <div class="divider"></div>
    <div class="flex flex-wrap gap-2 px-2">
      <div class="badge badge-outline badge-lg m-0.5">Calculator</div>
      <div class="badge badge-outline badge-lg m-0.5">Search</div>
    </div>
  </div>
</template>

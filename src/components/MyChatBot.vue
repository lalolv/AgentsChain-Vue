<script setup>
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

const props = defineProps({
  botInfo: {
    type: Object,
    required: true
  },
})

const router = useRouter()

// 返回首页
function backHome() {
  router.push('/')
}
</script>

<template>
  <div class="">
    <!-- avatar 3D -->
    <div class="avatar">
      <!-- 返回按钮 -->
      <div class="fixed btn btn-xs btn-circle m-2" @click="backHome">
        <ArrowLeftCircleIcon></ArrowLeftCircleIcon>
      </div>
      <div class="w-full">
        <img :src="`https://qn.appchain.ai/${botInfo.avatar}-avatar_thumb`" />
      </div>
    </div>
    <!-- name and desc -->
    <div class="px-2">
      <div class="text-2xl font-bold text-current text-center">{{ botInfo.name }}</div>
      <div class="text-xs text-center text-slate-400">2023-7-25 出生</div>
      <div class="text-base line-clamp-5 text-center text-slate-500 mt-4">
        {{ botInfo.desc }}
      </div>
    </div>
    <!-- stats -->
    <div class="divider"></div>
    <div class="badge badge-lg badge-primary m-2">{{ botInfo.llm }}</div>
    <!-- skills -->
    <div class="flex flex-wrap gap-2 px-2">
      <template v-for="tool in botInfo.tools">
        <div class="badge badge-outline badge-md m-0.5">{{ tool }}</div>
      </template>
    </div>
  </div>
</template>

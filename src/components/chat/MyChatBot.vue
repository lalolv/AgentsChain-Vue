<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { WrenchScrewdriverIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { MdPreview } from 'md-editor-v3'
import { onMounted } from 'vue'
import { useChatStore } from '@/stores/chat'

const store = useChatStore()
const props = defineProps({
  botInfo: {
    type: Object,
    required: true
  }
})

const router = useRouter()

// 初始化
onMounted(() => {})

// 返回首页
function backHome() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col">
    <!-- avatar 3D -->
    <div class="flex-none relative avatar">
      <!-- 返回按钮 -->
      <div class="absolute left-2 top-2 btn btn-xs btn-circle p-0.5" @click="backHome">
        <ArrowLeftIcon></ArrowLeftIcon>
      </div>
      <!-- 头像 -->
      <div class="w-full">
        <img :src="`https://qn.appchain.ai/${botInfo.avatar}-avatar_thumb`" />
      </div>
      <!-- 工具按钮 -->
      <div class="absolute right-2 top-2 btn btn-xs btn-circle p-0.5">
        <WrenchScrewdriverIcon></WrenchScrewdriverIcon>
      </div>
      <!-- <template v-for="tool in botInfo.tools">
        <div class="badge badge-outline badge-md m-0.5">{{ tool }}</div>
      </template> -->
      <!-- LLM -->
      <div class="absolute bottom-0 h-5 w-full">
        <div class="absolute right-1 badge badge-neutral badge-sm">{{ botInfo.llm }}</div>
      </div>
    </div>
    <!-- name and desc -->
    <div class="flex-none px-2">
      <div class="text-lg font-bold text-current text-center">{{ botInfo.name }}</div>
      <div class="text-sm line-clamp-5 text-center text-slate-500">
        {{ botInfo.desc }}
      </div>
    </div>
    <div class="divider my-0"></div>
    <!-- real pushed message box from ws -->
    <div class="grow flex flex-wrap gap-2 px-2 overflow-auto">
      <article class="w-full prose prose-sm break-words">
        <MdPreview :modelValue="store.tokens" />
      </article>
    </div>
  </div>
</template>

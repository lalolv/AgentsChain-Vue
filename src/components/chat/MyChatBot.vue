<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { WrenchScrewdriverIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useChatStore } from '@/stores/chat'
import MyIotItem from './MyIotItem.vue'

const store = useChatStore()
const props = defineProps({
  agentInfo: {
    type: Object,
    required: true
  }
})
const chatTokens = ref(null)
const baseUrl = ref('')
const router = useRouter()

// 初始化
onMounted(() => {
  baseUrl.value = import.meta.env.VITE_BASE_API
  // 初始化模型消息历史
  store.chains = []
})

// 监听状态的变化
store.$subscribe((_, state) => {
  if (state.tokens !== '') {
    chatTokens.value.scrollTo(0, chatTokens.value.scrollHeight)
  }
})

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
        <img v-if="agentInfo.agent_id" :src="`${baseUrl}/agent/${agentInfo.agent_id}/avatar`" />
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
        <div class="absolute right-1 badge badge-neutral badge-sm">{{ agentInfo.llm }}</div>
      </div>
    </div>
    <!-- name and desc -->
    <div class="flex-none px-2">
      <div class="text-lg font-bold text-current text-center">{{ agentInfo.name }}</div>
      <div class="text-sm line-clamp-5 text-center text-slate-500">
        {{ agentInfo.desc }}
      </div>
    </div>
    <div class="divider my-0"></div>
    <!-- real pushed message box from ws -->
    <div ref="chatTokens" class="grow flex flex-wrap gap-2 px-2 overflow-auto bg-white">
      <div v-if="store.chains.length > 0" class="w-full h-full">
        <template v-for="item in store.chains">
          <MyIotItem :action="item.action" :output="item.output"></MyIotItem>
        </template>
      </div>
      <div class="w-full h-full flex justify-center items-center" v-else>
        <img src="@/assets/waiting.jpg" class="opacity-25">
      </div>
    </div>
  </div>
</template>

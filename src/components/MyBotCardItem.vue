<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  botInfo: {
    type: Object,
    required: true
  }
})

// 跳转到聊天界面
function go_detail() {
  router.push('chat/'+props.botInfo.id)
}
</script>

<template>
  <div
    class="max-w-md mx-auto h-48 bg-white rounded-xl shadow overflow-hidden md:max-w-2xl cursor-pointer transition ease-in-out hover:shadow-xl hover:-translate-y-2"
    @click="go_detail"
  >
    <div class="md:flex">
      <div class="flex-none w-48">
        <img
          class="h-48 w-48 md:h-48 md:w-48 object-cover"
          :src="`https://qn.appchain.ai/${botInfo.avatar}-avatar_thumb`"
          alt="Modern building architecture"
        />
      </div>
      <div class="flex flex-col p-4">
        <!-- header -->
        <div class="flex-none tracking-wide text-sm text-indigo-500 font-semibold">
          使用基于 Azure 的 GPT-3.5 大模型 
        </div>
        <!-- title -->
        <div class="flex-none truncate block mt-1 text-lg leading-tight font-medium text-black">
          {{ botInfo.name}}
        </div>
        <!-- desc -->
        <p class="flex-none mt-2 line-clamp-3 text-slate-500">
          {{ botInfo.desc}}
        </p>
        <div class="grow flex justify-end items-end gap-2">
          <template v-for="tool in botInfo.tools">
            <div class="badge badge-sm badge-outline">{{ tool }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

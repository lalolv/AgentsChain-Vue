<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue';

const router = useRouter()
const baseUrl = ref('')
const props = defineProps({
  agentInfo: {
    type: Object,
    required: true
  }
})

// 初始化
onMounted(()=>{
  baseUrl.value = import.meta.env.VITE_BASE_API
  console.log(baseUrl.value);
})

// 跳转到聊天界面
function go_detail() {
  router.push('chat/'+props.agentInfo.id)
}
</script>

<template>
  <div
    class="max-w-md  h-48 bg-white rounded-xl shadow overflow-hidden md:max-w-2xl cursor-pointer transition ease-in-out hover:shadow-xl hover:-translate-y-2"
    @click="go_detail"
  >
    <div class="md:flex">
      <div class="flex-none w-48">
        <img
          class="h-48 w-48 md:h-48 md:w-48 object-cover"
          :src="`${baseUrl}/agent/${agentInfo.id}/avatar`"
          alt="Modern building architecture"
        />
      </div>
      <div class="grow flex flex-col p-4">
        <!-- header -->
        <div class="flex-none tracking-wide text-sm text-indigo-500 font-semibold">
          使用基于 Azure 的 GPT-3.5 大模型 
        </div>
        <!-- title -->
        <div class="flex-none truncate block mt-1 text-lg leading-tight font-medium text-black">
          {{ agentInfo.name}}
        </div>
        <!-- desc -->
        <p class="flex-none mt-2 line-clamp-3 text-slate-500">
          {{ agentInfo.desc}}
        </p>
        <div class="grow flex justify-end items-end gap-2">
          <template v-for="tool in agentInfo.tools">
            <div class="badge badge-sm badge-outline">{{ tool }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

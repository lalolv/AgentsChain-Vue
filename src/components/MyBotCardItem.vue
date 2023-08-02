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
  router.push('chat?id='+props.botInfo.id)
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
          src="@/assets/avatar_3d.png"
          alt="Modern building architecture"
        />
      </div>
      <div class="flex flex-col p-4">
        <!-- header -->
        <div class="flex-none uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Company retreats
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
          <div class="badge badge-sm badge-outline">搜索</div>
          <div class="badge badge-sm badge-outline">数学计算</div>
        </div>
      </div>
    </div>
  </div>
</template>

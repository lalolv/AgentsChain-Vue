<script setup>
import { getDocs, upDoc } from '@/api/widget.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { formatSize } from '@/utils/string.js'

const route = useRoute()
// 机器人列表
const docs = ref('')
const upfile = ref(null)

onMounted(async () => {
  let res = await getDocs(route.params.id)
  if (res['status'] == 200) {
    docs.value = res['data']
  }
})

function selectFile() {
  upfile.value.click();
}

function selectedFile(evt) {
  const file = evt.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  upDoc(route.params.id, formData, async function (event) {
    // console.log(event.progress);
    if (event.progress == 1) {
      let res = await getDocs(route.params.id)
      if (res['status'] == 200) {
        docs.value = res['data']
      }
    }
  })
}
</script>

<template>
  <div class="flex justify-between mb-4">
    <h1 class="text-xl font-semibold">文档列表</h1>
    <input ref="upfile" type="file" accept="*" class="hidden" @change="selectedFile">
    <button class="btn btn-xs btn-circle" @click="selectFile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  </div>
  <template v-for="doc in docs">
    <div class="my-2">
      <!-- 文件信息 -->
      <div class="text-gray-600 line-clamp-1">
        {{ doc.name }}
      </div>
      <div class="text-xs text-gray-400"> {{ formatSize(doc.size) }}</div>
    </div>
  </template>
</template>

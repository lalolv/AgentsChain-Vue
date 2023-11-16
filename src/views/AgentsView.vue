<script setup>
import { MyAgentItem } from '@/components/agent'
import { getAgents } from '@/api/api.js'
import { onMounted, ref } from 'vue'

// 机器人列表
const agents = ref('')

onMounted(async () => {
  let res = await getAgents()
  if (res['status'] == 200) {
    agents.value = res['data']
  }
})
</script>

<template>
  <div>
    <!-- 智能体 agent 列表 -->
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 p-4"
    >
      <template v-for="agent in agents">
        <my-agent-item :agent-info="agent"></my-agent-item>
      </template>
    </div>
  </div>
</template>

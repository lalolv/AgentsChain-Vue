<script setup>
import { ref, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['path', 'iconCom'])
const isActive = ref(false)

const store = useMenuStore()
// 监听菜单的变化
store.$subscribe((_, state) => {
  setActivateClass(state.item)
})
// 设置默认的激活样式
// 默认状态值
onMounted(() => {
  // setActivateClass(store.item)
})
// 设置激活样式
function setActivateClass(activateName) {
  if (activateName == props.path) {
    isActive.value = true
  } else {
    isActive.value = false
  }
}
// 选择菜单项
function selectItem() {
  // 调用 action
  // 改变状态值
  // store.setActivate(props.path)
  // 跳转页面
  router.push('/' + props.path)
}
</script>

<template>
  <li class="my-2 grid justify-center">
    <!-- class:active -->
    <a :class="{ active: isActive }" @click="selectItem">
      <component :is="iconCom" class="h-5 w-5" />
    </a>
  </li>
</template>

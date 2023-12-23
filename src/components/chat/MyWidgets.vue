<script setup>
import { defineAsyncComponent } from 'vue'

const widgets = ['WgDoc', 'WgPrompt']
const widgetCompts = []
widgets.forEach((w) => {
  const asyncComp = defineAsyncComponent(() => import(`@/components/widgets/${w}.vue`))
  widgetCompts.push(asyncComp)
})
</script>

<template>
  <div class="flex flex-col gap-2 px-2 py-2">
    <template v-for="wgc in widgetCompts">
      <div class="px-4 py-2 bg-white">
        <component :is="wgc"></component>
      </div>
    </template>
  </div>
</template>

<script setup>
import {
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  StarIcon
} from '@heroicons/vue/24/solid'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import MyMenuItem from './MyMenuItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function help() {
  router.push('/help')
}
</script>

<template>
  <div class="menu flex flex-col h-full justify-center">
    <!-- Logo -->
    <div class="flex-none grid justify-center">
      <img class="object-cover w-14 h-14" src="@/assets/logo.svg" />
    </div>
    <!-- Menu list -->
    <ul class="grow flex flex-col justify-center">
      <MyMenuItem
        path="agents"
        is-active="true"
        :icon-com="ChatBubbleBottomCenterTextIcon"
      ></MyMenuItem>
      <MyMenuItem path="created" :icon-com="BoltIcon"></MyMenuItem>
      <MyMenuItem path="favorites" :icon-com="StarIcon"></MyMenuItem>
    </ul>
    <!-- Help -->
    <div class="grid justify-center my-4">
      <div class="flex-none btn btn-circle btn-sm bg-transparent" @click="help">
        <QuestionMarkCircleIcon class="w-8 h-8" />
      </div>
    </div>
    <!-- Avatar -->
    <div class="flex-none avatar grid justify-center">
      <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="@/assets/avatar.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const item = ref("")

  function setActivate(name) {
    item.value = name
  }

  return { item, setActivate }
})

import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/ChatView.vue'
import { useMenuStore } from '@/stores/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/chat"
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
    {
      path: '/tools',
      name: 'tools',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToolsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.afterEach((to, _, failure) => {
  if (!failure) {
    const store = useMenuStore()
    store.setActivate(to.name)
  }
})

export default router

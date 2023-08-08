import { createRouter, createWebHistory } from 'vue-router'
import BotsView from '@/views/BotsView.vue'
import { useMenuStore } from '@/stores/menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/bots'
    },
    {
      path: '/bots',
      name: 'bots',
      component: BotsView
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: () => import('@/views/ChatView.vue')
    },
    {
      path: '/created',
      name: 'created',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/CreatedView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/FavoritesView.vue')
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

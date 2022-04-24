import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { path: '/home' }
  },
  /* 主页 */
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/index.vue')
  },
  /* 搜索 */
  {
    path: '/search',
    name: 'search',
    component: () => {
      import('@/views/Search/index.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

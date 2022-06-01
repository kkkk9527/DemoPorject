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
  /* 登录 */
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  /* 注册 */
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register/index.vue')
  },
  /* 搜索 */
  {
    path: '/search',
    //path: '/search',
    name: 'search',
    component: () =>import('@/views/Search/index.vue')
  },
  /* 商品详情 */
  {
    path: '/detail',
    //path: '/search',
    name: 'detail',
    component: () =>import('@/views/Detail/index.vue')
  },
  /* 成功添加到购物车 */
  {
    path: '/addcartsuccess',
    //path: '/search',
    name: 'addcartsuccess',
    component: () =>import('@/views/AddCartSuccess/index.vue')
  },
  /* 跳转到购物车 */
  {
    path: '/shopCart',
    //path: '/search',
    name: 'shopCart',
    component: () =>import('@/views/ShopCart/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

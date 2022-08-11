import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../pages/MyHome/MyHome.vue')
  },
  {
    path: '/cart',
    component: () => import('../pages/MyCart/MyCart.vue')
  },
  {
    path: '/order',
    component: () => import('../pages/MyOrder/MyOrder.vue')
  },
  {
    path: '/mine',
    component: () => import('../pages/Mine/Mine.vue')
  },
  {
    path: '/store',
    component: () => import('../pages/Store/MyStore.vue')
  },

]


const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
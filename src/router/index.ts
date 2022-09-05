import { Toast } from 'vant'
import 'vant/lib/Toast/style/index'
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
    component: () => import('../pages/MyCart/MyCart.vue'),
    meta: { isAuth: true }
  },
  {
    path: '/order',
    component: () => import('../pages/MyOrder/MyOrder.vue'),
    meta: { isAuth: true }
  },
  {
    path: '/mine',
    component: () => import('../pages/Mine/Mine.vue'),
    meta: { isAuth: true }
  },
  {
    path: '/store',
    component: () => import('../pages/Store/MyStore.vue')
  },
  {
    path: '/createorder',
    component: () => import('../pages/CreateOrder/CreateOrder.vue'),
    meta: { isAuth: true }
  },
  {
    path: '/address',
    component: () => import('../pages/Address/Address.vue'),
    meta: { isAuth: true }
  },

  {
    path: '/addressedit',
    component: () => import('../pages/AddressEdit/AddressEdit.vue'),
    meta: { isAuth: true }
  },
  {
    path: '/login',
    component: () => import('../pages/Login/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('../pages/Register/Register.vue'),
  },

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.isLogin === 1) {
      next()
    }else {
      Toast('请先登录')
      router.push('./login')
    }
  } else{
    next()
  }
})


export default router
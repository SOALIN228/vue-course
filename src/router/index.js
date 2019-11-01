import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
import { setTitle, getToken, setToken } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title) // 存在meta 则设置title
  // if (to.name !== 'login') { // 跳转非登录页
  //   if (HAS_LOGINED) { // 已登录不拦截
  //     next()
  //   } else { // 未登录跳转到登录页
  //     next({ name: 'login' })
  //   }
  // } else { // 跳转登录页
  //   if (HAS_LOGINED) { // 已登录拦截到home 页
  //     next({ name: 'home' })
  //   } else { // 未登录不拦截
  //     next()
  //   }
  // }
  const token = getToken()
  if (token) {
    store.dispatch('authorization').then(() => {
      if (to.name === 'login') {
        next({ name: 'home' })
      } else {
        next()
      }
    }).catch(() => {
      setToken('')
      next({ name: 'login' })
    })
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

router.afterEach((to, from) => { // 路由加载完将页面loading 取消
})

export default router

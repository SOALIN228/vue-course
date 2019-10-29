export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/views/Home.vue'),
      tel: () => import('@/views/tel.vue'),
      email: () => import('@/views/email.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '*',
    component: () => import('@/views/errer_404.vue')
  }
]

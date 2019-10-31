export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/views/Home.vue'),
      tel: () => import('@/views/Tel.vue'),
      email: () => import('@/views/Email.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('@/views/Count.vue')
  },
  {
    path: '*',
    component: () => import('@/views/Error404.vue')
  }
]

import Home from '@/views/Home.vue'
import Layout from '@/views/LayoutPage.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home
      }
    ]
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   // components: {
  //   //   default: () => import('@/views/Home.vue'),
  //   //   tel: () => import('@/views/Tel.vue'),
  //   //   email: () => import('@/views/Email.vue')
  //   // }
  //   component: Layout
  // },
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
    path: '/split',
    name: 'split',
    component: () => import('@/views/Split.vue')
  },
  {
    path: '/menuPage',
    name: 'menuPage',
    component: () => import('@/views/MenuPage.vue')
  },
  {
    path: '*',
    component: () => import('@/views/Error404.vue')
  }
]

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('@/views/LayoutPage.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'table',
        component: () => import('@/views/Table.vue')
      },
      {
        path: 'folder-tree',
        component: () => import('@/views/FolderTree.vue')
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

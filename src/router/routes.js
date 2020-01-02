export const routerMap = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('@/views/LayoutPage.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home',
        name: 'home_index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'table',
        name: 'table_page',
        component: () => import('@/views/Table.vue')
      },
      {
        path: 'folder-tree',
        name: 'folder_tree',
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
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/MenuPage.vue')
  }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/Error404.vue')
  }
]

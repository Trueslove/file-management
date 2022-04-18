import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/borrow',
    component: Layout,
    redirect: '/borrow/index',
    meta: { title: '档案查借阅', icon: 'sfont system-component' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/borrow/index.vue')),
        meta: { title: '档案授权' }
      },
      {
        path: 'register',
        component: createNameComponent(() => import('@/views/main/borrow/searchRegister.vue')),
        meta: { title: '档案查阅登记' }
      },
      {
        path: 'receive',
        component: createNameComponent(() => import('@/views/main/borrow/receive.vue')),
        meta: { title: '档案接收' }
      },
    ]
  }
]

export default route
import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/archives',
    component: Layout,
    redirect: '/archives/roster',
    meta: { title: '档案管理', icon: 'sfont system-chart' },
    children: [
      {
        path: 'archives',
        component: createNameComponent(() => import('@/views/main/archives/roster.vue')),
        meta: { title: '档案花名册' }
      },
    ]
  }
]

export default route
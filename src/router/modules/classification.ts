import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/classification',
    component: Layout,
    redirect: '/classification/search',
    meta: { title: '分级阅览', icon: 'sfont system-document' },
    children: [
      {
        path: 'search',
        component: createNameComponent(() => import('@/views/main/classification/search.vue')),
        meta: { title: '分级阅览' }
      },
    ]
  }
]

export default route
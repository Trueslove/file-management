import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/retrieval',
    component: Layout,
    redirect: '/retrieval/index',
    meta: { title: '档案检索', icon: 'sfont system-xitongzhuangtai' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/retrieval/index.vue')),
        meta: { title: '档案检索' }
      },
    ]
  }
]

export default route
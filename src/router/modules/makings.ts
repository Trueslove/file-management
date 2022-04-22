import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/makings',
    component: Layout,
    redirect: '/makings/register',
    meta: { title: '档案材料管理', icon: 'sfont system-document' },
    children: [
      {
        path: 'material',
        component: createNameComponent(() => import('@/views/main/makings/material.vue')),
        meta: { title: '物料页面' }
      },
      {
        path: 'receive',
        component: createNameComponent(() => import('@/views/main/makings/receive.vue')),
        meta: { title: '材料接收' }
      },
      {
        path: 'forward',
        component: createNameComponent(() => import('@/views/main/makings/forward.vue')),
        meta: { title: '材料转递' }
      },
      {
        path: 'handle',
        component: createNameComponent(() => import('@/views/main/makings/handle.vue')),
        meta: { title: '催收处理' }
      },
      {
        path: 'collection',
        component: createNameComponent(() => import('@/views/main/makings/collection.vue')),
        meta: { title: '材料催收' }
      },
      {
        path: 'guid',
        component: createNameComponent(() => import('@/views/main/makings/guid.vue')),
        meta: { title: '材料归档' }
      },
      {
        path: 'audit',
        component: createNameComponent(() => import('@/views/main/makings/audit.vue')),
        meta: { title: '材料审核' }
      }
    ]
  }
]

export default route
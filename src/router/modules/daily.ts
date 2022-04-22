import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/daily',
    component: Layout,
    redirect: '/daily/receive',
    meta: { title: '档案日常管理', icon: 'sfont system-document' },
    children: [
      {
        path: 'receive',
        component: createNameComponent(() => import('@/views/main/daily/receive.vue')),
        meta: { title: '档案接收' }
      },
      {
        path: 'audit',
        component: createNameComponent(() => import('@/views/main/daily/audit.vue')),
        meta: { title: '档案审核' }
      },
      {
        path: 'warehousing',
        component: createNameComponent(() => import('@/views/main/daily/warehousing.vue')),
        meta: { title: '档案入库' }
      },
      {
        path: 'collection',
        component: createNameComponent(() => import('@/views/main/daily/collection.vue')),
        meta: { title: '档案催收' }
      },
      {
        path: 'collectionHandle',
        component: createNameComponent(() => import('@/views/main/daily/collectionHandle.vue')),
        meta: { title: '催收处理' }
      },
      {
        path: 'inquiry',
        component: createNameComponent(() => import('@/views/main/daily/inquiry.vue')),
        meta: { title: '申请预审' }
      },
      {
        path: 'receiveInquiry',
        component: createNameComponent(() => import('@/views/main/daily/receiveInquiry.vue')),
        meta: { title: '接收预审' }
      }
    ]
  }
]

export default route
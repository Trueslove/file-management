import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/arrangement',
    component: Layout,
    redirect: '/arrangement/register',
    meta: { title: '档案整理查缺', icon: 'sfont system-document' },
    children: [
      {
        path: 'register',
        component: createNameComponent(() => import('@/views/main/arrangement/register.vue')),
        meta: { title: '档案整理登记' }
      },
      {
        path: 'catalogue',
        component: createNameComponent(() => import('@/views/main/arrangement/catalogue.vue')),
        meta: { title: '档案目录查缺' }
      },
      {
        path: 'template',
        component: createNameComponent(() => import('@/views/main/arrangement/template.vue')),
        meta: { title: '查缺模板管理' }
      }
    ]
  }
]

export default route
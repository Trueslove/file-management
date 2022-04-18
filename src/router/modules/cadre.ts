import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/cadre',
    component: Layout,
    redirect: '/cadre/info',
    meta: { title: '档案信息采集', icon: 'sfont system-document' },
    children: [
      {
        path: 'info',
        component: createNameComponent(() => import('@/views/main/cadre/info.vue')),
        meta: { title: '干部人事档案' }
      },
      {
        path: 'num',
        component: createNameComponent(() => import('@/views/main/cadre/num.vue')),
        meta: { title: '干部数字档案' }
      },
    ]
  }
]

export default route
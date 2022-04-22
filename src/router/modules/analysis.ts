import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/analysis',
    component: Layout,
    redirect: '/analysis/search',
    meta: { title: '数据利用分析', icon: 'sfont system-document' },
    children: [
      {
        path: 'search',
        component: createNameComponent(() => import('@/views/main/analysis/search.vue')),
        meta: { title: '查询统计' }
      },
      {
        path: 'update',
        component: createNameComponent(() => import('@/views/main/analysis/update.vue')),
        meta: { title: '档案更新情况分析' }
      },
    ]
  }
]

export default route
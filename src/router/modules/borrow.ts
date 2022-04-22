import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/borrow',
    component: Layout,
    redirect: '/borrow/index',
    meta: { title: '档案查借阅管理', icon: 'sfont system-component' },
    children: [
      {
        path: 'paperSeach',
        component: createNameComponent(() => import('@/views/main/borrow/paperSeach.vue')),
        meta: { title: '纸质档案查阅登记' }
      },
      {
        path: 'paperBorrow',
        component: createNameComponent(() => import('@/views/main/borrow/paperBorrow.vue')),
        meta: { title: '纸质档案借阅登记' }
      },
      {
        path: 'numSeach',
        component: createNameComponent(() => import('@/views/main/borrow/numSeach.vue')),
        meta: { title: '数字档案查阅登记' }
      },
      {
        path: 'apply',
        component: createNameComponent(() => import('@/views/main/borrow/apply.vue')),
        meta: { title: '档案查借阅申请' }
      },
      {
        path: 'record',
        component: createNameComponent(() => import('@/views/main/borrow/record.vue')),
        meta: { title: '档案查借阅记录' }
      },
      {
        path: 'audit',
        component: createNameComponent(() => import('@/views/main/borrow/audit.vue')),
        meta: { title: '档案查借阅审批' }
      },
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/main/borrow/index.vue')),
        meta: { title: '档案查借阅授权' }
      },
    ]
  }
]

export default route
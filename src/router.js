import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: () => import('@/views/post/List')
        },
        {
          path: '/post/:id',
          name: 'post-detail',
          component: () => import('@/views/post/Detail')
        }
      ]
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('@/views/admin/Login')
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/Home'),
      children: [
        {
          path: '',
          component: () => import('@/views/admin/Dashboard')
        },
        {
          path: 'post',
          name: 'admin-post',
          component: () => import('@/views/admin/post/List')
        },
        {
          path: 'post/new',
          name: 'admin-post-new',
          component: () => import('@/views/admin/post/New')
        },
        {
          path: 'post/edit/:id',
          name: 'admin-post-edit',
          component: () => import('@/views/admin/post/Edit')
        },
        {
          path: 'category',
          name: 'admin-category',
          component: () => import('@/views/admin/category/Home')
        },
        {
          path: 'tag',
          name: 'admin-tag',
          component: () => import('@/views/admin/tag/Home')
        },
        {
          path: 'page',
          name: 'admin-page',
          component: () => import('@/views/admin/page/Home')
        }
      ]
    }
  ]
})

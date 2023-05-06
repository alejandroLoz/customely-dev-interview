import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsView
    },
    {
      path: '/',
      name: 'index',
      component: ProductsView
    },
    {
      path: '/products',
      name: 'ProductsView',
      component: ProductsView
    },
    // {
    //   path: '/product/:id',
    //   name: 'ProductView',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/ProductView.vue'),
    //   meta: { product: null },
    //   props: true
    // }
  ]
})

export default router

import HomeView from '../views/HomeView.vue'
import ComputedView from '../views/ComputedView.vue'
import Blog from '../views/Blog.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/computed',
        name: 'computed',
        component: ComputedView
      },
      {
        path: '/blog/:id',
        name: 'blog',
        component: Blog
      }
]
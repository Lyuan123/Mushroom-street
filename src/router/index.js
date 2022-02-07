import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category.vue')
  }, {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart.vue')
  }, {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue')
  }, {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import('../views/detail/detail.vue')
  },{
    path: '/ihave',
    name: 'Ihave',
    component: () => import('../views/Ihave/ihave.vue')
  }
] 

const router = new VueRouter({
  routes
})

export default router

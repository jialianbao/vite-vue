
const routes = [
  // {
  //   path: '/',
  //   redirect: '/home',
  // },
  {
    path: '/',
    name: 'home',
    alias: ['/', '/index.html', '/index', '/home'],
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('../views/Swiper.vue')
  },
  {
    path: '/debouce',
    name: 'debouce',
    component: () => import('../views/Debouce.vue')
  }
]

export default routes
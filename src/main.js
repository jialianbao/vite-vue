import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from './language'
import './index.css'

// createWebHashHistory #hash
// createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/index'



const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

createApp(App)
  .use(store)
  .use(router)
  .use(VueI18n)
  .mount('#app')

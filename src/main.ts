import { createApp } from 'vue'
import { App } from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

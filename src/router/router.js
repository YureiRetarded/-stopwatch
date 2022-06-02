import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/mainpage'
import StopWatchPage from '@/pages/stopwatchpage'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/stopwatch',
    component: StopWatchPage
  }
]

const router = createRouter({
  routes,
  history:createWebHashHistory(process.env.BASE_URL)
})

export default router

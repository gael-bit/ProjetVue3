import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../components/PageAccueil'
import Disney from '../components/Disney'


const routes = [
    {
        path: '/',
        name: 'accueil',
        component: PageAccueil
    },
    {
        path: '/disney',
        name: 'disney',
        component: Disney
    }
]


const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    base: process.env.BASE_URL,
  routes
})

export default router

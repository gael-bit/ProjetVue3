import Vue from 'vue'
import VueRouter from 'vue-router'
import PageAccueil from '../components/PageAccueil'
import Disney from '../components/Disney'

Vue.use(VueRouter)

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

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
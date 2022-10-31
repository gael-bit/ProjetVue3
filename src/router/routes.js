import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../components/PageAccueil_copy'

Vue.use(VueRouter)

const routes = [
    {
        path: '/pageAccueil_copy',
        name: 'accueil',
        component: Accueil
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
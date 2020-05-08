import Vue from 'vue'
import VueRouter from 'vue-router'
const footer = () =>
    import ('../components/header.vue')

import Home from '../views/Home.vue'
import Me from '../views/Me'
import Video from '../views/Video'
import Recommend from '../views/Recommend'
import Default from '../views/Default'
import Welcome from '../views/Welcome'
import Login from '../views/Login'
import register from '../views/Register'
import search from '../views/Search'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: Home,
            footer: footer,

        }
    },
    {
        path: '/me',
        name: 'Me',
        components: {
            default: Me,
            footer: footer
        }

    },
    {
        path: '/video',
        name: 'Video',
        components: {
            default: Video,
            footer: footer
        }

    },
    {
        path: '/recommend',
        name: 'Recommend',
        components: {
            default: Recommend,
            // footer: footer
        }

    },
    {
        path: '/default/:id',
        name: 'default',
        components: {
            default: Default
        }
    },
    {
        path: '/welcome',
        name: 'welcome',
        components: {
            default: Welcome
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: Login,
        }
    },
    {
        path: '/register',
        name: 'register',
        components: {
            default: register
        }
    },
    {
        path: '/search',
        name: 'search',
        components: {
            default: search,
        }
    }

]

const router = new VueRouter({
    routes
})

export default router
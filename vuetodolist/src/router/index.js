import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import List from '../pages/list.vue'
import Favor from '../pages/favor.vue'
import Add from '../pages/add.vue'
import Change from '../pages/change.vue'
import Login from '../pages/login.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        }, {
            path: '/list',
            name: 'list',
            component: List,
            meta: {
                keepAlive: true
            }
        }, {
            path: '/favor',
            name: 'favor',
            component: Favor,
            meta: {
                keepAlive: true
            }
        }, {
            path: '/add',
            name: 'add',
            component: Add
        }, {
            path: '/change',
            name: 'change',
            component: Change
        }
    ]
})

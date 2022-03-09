import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Search from '@/page/Search.vue'
import Home from '@/page/Home/Home.vue'
import Register from '@/page/Register.vue'
import Login from '@/page/Login.vue'
import Detail from '@/page/Detail'

// 创建路由规则
export default [
    //{
    //     path: '/Header',
    //     name:''
    //     component: Header,
    //     meta: {
    //         footerNotShow: false
    //     }
    // },
    {
        path: '/Register',
        name: 'Register',
        component: Register,
        meta: {
            footerNotShow: true
        }
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {
            footerNotShow: true
        }
    },
    {
        //path: '/Search/:keyword?/:categoryName?/:category1Id?/:category2Id?/:category3Id?', 
        path: '/Search',
        //path: '/Search',
        name: 'Search',
        component: Search,
        meta: {
            footerNotShow: false
        }
    },
    {
        path: '/Home',
        name: 'home',
        component: Home,
        meta: {
            footerNotShow: false
        }
    },
    {
        path: '/Home',
        name: 'home',
        component: Home,
        meta: {
            footerNotShow: false
        }
    },
    {
        path: '/Detail/:skuid',
        name: 'Detail',
        component: Detail,
        props: true,
        meta: {
            footerNotShow: false
        },
    },
]


//export default route;
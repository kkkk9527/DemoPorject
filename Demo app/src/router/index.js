import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Search from '@/page/Search.vue'
import Home from '@/page/Home/Home.vue'
import Register from '@/page/Register.vue'
import Login from '@/page/Login.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 创建路由规则
const route = new VueRouter({
    routes: [
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
            path: '/Search/:keyword?/:categoryName?/:category1Id?/:category2Id?/:category3Id?',
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
        }
    ]
})


export default route;
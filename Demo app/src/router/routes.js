import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Search from '@/page/Search.vue'
import Home from '@/page/Home/Home.vue'
import Register from '@/page/Register'
import Login from '@/page/Login'
import Detail from '@/page/Detail'
import AddCartSuccess from '@/page/AddCartSuccess'
import ShopCart from '@/page/ShopCart'
import Trade from '@/page/OrderAndPay/Trade'
import Pay from '@/page/OrderAndPay/Pay'
import PaySuccess from '@/page/OrderAndPay/PaySuccess'
import Center from '@/page/OrderAndPay/Center'
import MyOrder from '@/page/OrderAndPay/Center/MyOrder/myOrder.vue'


// 创建路由规则
export default [{
        path: '/',
        redirect: '/home'
    },
    { //注册组件
        path: '/Register',
        name: 'Register',
        component: Register,
        meta: {
            footerNotShow: true
        }
    },
    { //登录组件
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {
            footerNotShow: true
        }
    },
    { //搜索组件
        //path: '/Search/:keyword?/:categoryName?/:category1Id?/:category2Id?/:category3Id?', 
        path: '/Search',
        //path: '/Search',
        name: 'Search',
        component: Search,
        meta: {
            footerNotShow: false
        }
    },
    { //主页组件
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            footerNotShow: false
        }
    },
    { //商品详情组件
        path: '/Detail/:skuid',
        name: 'Detail',
        component: Detail,
        props: true,
        meta: {
            footerNotShow: false
        },
    },
    { //加入购物车组件
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        props: true,
        component: AddCartSuccess,
        meta: {
            footerNotShow: false
        },
    },
    { //跳转到购物车
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart,
        meta: {
            footerNotShow: false
        },
    },
    { //确认商品页面
        path: '/trade',
        name: 'trade',
        component: Trade,
        meta: {
            footerNotShow: false
        },
    },
    { //支付页面
        path: '/pay',
        name: 'pay',
        component: Pay,
        meta: {
            footerNotShow: false
        },
    },
    { //支付成功页面
        path: '/paysuccess',
        name: 'paysuccess',
        component: PaySuccess,
        meta: {
            footerNotShow: false
        },
    },
    { //个人中心
        path: '/center',
        name: 'center',
        redirect: '/center/myorder',
        component: Center,
        children: [{
            path: 'myorder',
            name: 'myorder',
            component: MyOrder
        }],
        meta: {
            footerNotShow: false
        },
    },
]


//export default route;
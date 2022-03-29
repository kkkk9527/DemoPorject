import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Search = () =>
    import ('@/page/Search.vue')
const Home = () =>
    import ('@/page/Home/Home.vue')
    //const Register = () =>
    //import ('@/page/Register')
    // import Login from '@/page/Login'
    // import Detail from '@/page/Detail'
    // import AddCartSuccess from '@/page/AddCartSuccess'
    // import ShopCart from '@/page/ShopCart'
    // import Trade from '@/page/OrderAndPay/Trade'
    // import Pay from '@/page/OrderAndPay/Pay'
    // import PaySuccess from '@/page/OrderAndPay/PaySuccess'
    // import Center from '@/page/OrderAndPay/Center'
    // import MyOrder from '@/page/OrderAndPay/Center/MyOrder/myOrder.vue'


// 创建路由规则
export default [{
        path: '/',
        redirect: '/home'
    },
    { //注册组件
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('@/page/Register'),
        meta: {
            footerNotShow: true
        }
    },
    { //登录组件
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('@/page/Login'),
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
        component: () =>
            import ('@/page/Detail'),
        props: true,
        meta: {
            footerNotShow: false
        },
    },
    { //加入购物车组件
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        props: true,
        component: () =>
            import ('@/page/AddCartSuccess'),
        meta: {
            footerNotShow: false
        },
    },
    { //跳转到购物车
        path: '/shopcart',
        name: 'shopcart',
        component: () =>
            import ('@/page/ShopCart'),
        meta: {
            footerNotShow: false
        },
    },
    { //确认商品页面
        path: '/trade',
        name: 'trade',
        component: () =>
            import ('@/page/OrderAndPay/Trade'),
        meta: {
            footerNotShow: false
        },
    },
    { //支付页面
        path: '/pay',
        name: 'pay',
        component: () =>
            import ('@/page/OrderAndPay/Pay'),
        beforeEnter(from, next) {
            if (from.path == '/trade') {
                next();
            }
        },
        meta: {
            footerNotShow: false
        },
    },
    { //支付成功页面
        path: '/paysuccess',
        name: 'paysuccess',
        component: () =>
            import ('@/page/OrderAndPay/PaySuccess'),
        meta: {
            footerNotShow: false
        },
    },
    { //个人中心
        path: '/center',
        name: 'center',
        redirect: '/center/myorder',
        component: () =>
            import ('@/page/OrderAndPay/Center'),
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('Token')) {
                next();
            } else {
                alert('请登录用户');
                next('/Login');
            }
        },
        children: [{
            path: 'myorder',
            name: 'myorder',
            component: () =>
                import ('@/page/OrderAndPay/Center/MyOrder/myOrder.vue'),
        }],
        meta: {
            footerNotShow: false
        },
    },
]


//export default route;
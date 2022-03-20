import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes.js'
import store from '@/store'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



let router = new VueRouter({
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { y: 0 }
    },
});

router.beforeEach(async(to, from, next) => {
    // to and from are both route objects. must call `next`.
    let name = store.state.RegisterAndLogin.userInfo.name;
    /* 判断是否有用户信息 */
    if (name) {
        if (to.path == '/Login') {
            next('/home')
        }
    } else {
        if (localStorage.getItem('Token') || sessionStorage.getItem('Token')) {
            try {
                await store.dispatch('RegisterAndLogin/RequestUserInfo');
                next();
            } catch (error) {
                alert('请重新登陆');
                //next('/Login')
                store.commit('RegisterAndLogin/LOGINOUT');
                next('/Login');
            }
        } else {
            next();
        }
    }
    next();
})

export default router;
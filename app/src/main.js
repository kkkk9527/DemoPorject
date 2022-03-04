import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Nav from '@/components/Nav/Nav.vue'
import { reqCategoryList } from '@/API'
import store from '@/store'
import './mock/mockserver.js'

Vue.config.productionTip = false;
Vue.component(Nav.name, Nav);
reqCategoryList();

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
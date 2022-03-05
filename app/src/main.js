import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Nav from '@/components/Nav/Nav.vue'
import Carsousel from "@/components/Carsousel.vue"
import { reqCategoryList } from '@/API'
import store from '@/store'
import './mock/mockserver.js'
//import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/swiper.css'

Vue.config.productionTip = false;
Vue.component(Nav.name, Nav);
Vue.component(Carsousel.name, Carsousel)
reqCategoryList();

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
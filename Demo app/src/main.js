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
import PagiNation from '@/components/PagiNation'
import { MessageBox, Button } from 'element-ui'
import '@/plugins/validata.js'

Vue.config.productionTip = false;
Vue.component(Nav.name, Nav);
Vue.component(Carsousel.name, Carsousel)
Vue.component(PagiNation.name, PagiNation)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Button.name, Button)
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox;
reqCategoryList();

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store
}).$mount('#app')
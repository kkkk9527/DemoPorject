import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/index.js'
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.less'

createApp(App).use(store).use(router).mount('#app')

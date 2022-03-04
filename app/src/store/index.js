import Vue from "vue";
import Vuex from "vuex"
import { reqCategoryList, reqBannerList } from '@/API'

Vue.use(Vuex)

const Home = {
    namespaced: true,
    actions: {
        async categoryList(context) {
            let result = await reqCategoryList();
            if (result.code == 200) {
                context.commit("CATEGORYLIST", result.data)
            }
        },
        async getBannerList(context) {
            let result = await reqBannerList();
            if (result.code == 200) {
                context.commit("GETBANNERLIST", result.data)
            }
        },
    },
    mutations: {
        CATEGORYLIST(state, categorylist) {
            state.categoryList = categorylist;
        },
        GETBANNERLIST(state, bannerList) {
            state.bannerList = bannerList;
        }
    },
    state: { categoryList: [], bannerList: [] }
}

export default new Vuex.Store({
    modules: {
        Home
    }
})
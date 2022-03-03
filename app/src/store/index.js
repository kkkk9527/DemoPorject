import Vue from "vue";
import Vuex from "vuex"
import { reqCategoryList } from '@/API'
Vue.use(Vuex)

const Home = {
    namespaced: true,
    actions: {
        async categoryList(context) {
            let result = await reqCategoryList();
            if (result.code == 200) {
                context.commit("CATEGORYLIST", result.data)
            }
        }
    },
    mutations: {
        CATEGORYLIST(state, categorylist) {
            state.categoryList = categorylist;
        }
    },
    state: { categoryList: [] }
}

export default new Vuex.Store({
    modules: {
        Home
    }
})
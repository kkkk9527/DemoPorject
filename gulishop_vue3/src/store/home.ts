import { Commit } from 'vuex'
import { getBaseCategoryList, getBannerList, getFloorList } from '@/api/request'
export default {
    namespaced: true,
    actions: {
        async GetBaseCategoryList(context: { commit: Commit }) {
            const result = await getBaseCategoryList();
            //console.log(result);
            context.commit('ADDLIST', result.data);
        },
        async getBannerList(context: { commit: Commit }) {
            const result = await getBannerList();
            //console.log(result);
            context.commit('ADDBANNERLIST', result.data);
        },
        async getFloorData(context: { commit: Commit }) {
            const result = await getFloorList();
            //console.log(result);
            context.commit('ADDFLOORDATA', result.data);
        }
    },
    mutations: {
        ADDLIST(state: any, List: any) {
            state.List = List;
        },
        ADDBANNERLIST(state: any, bannerList: any) {
            state.bannerList = bannerList;
        },
        ADDFLOORDATA(state: any, floorData: any) {
            state.floorData = floorData;
        }
    },
    getters: {},
    state: {
        List: [],
        bannerList: [],
        floorData: []
    }
}
import { Commit } from 'vuex'
import { getGoodInformation } from '@/api/request'

interface stateData {
    detail: []
}

export default {
    namespaced: true,
    actions: {
        async getDetail(context: { commit: Commit }, skuId: number) {
            const result = await getGoodInformation(skuId);
            context.commit("getDetail", result.data.data);
        }
    },
    mutations: {
        getDetail(state: any, data: any): void {
            state.detail = data;
        }
    },
    getters: {
        categoryView: (state: any): void => {
            return state.detail.categoryView
        },
        skuInfo: (state: any): void => {
            return state.detail.skuInfo
        },
        spuSaleAttrList: (state: any): void => {
            return state.detail.spuSaleAttrList
        },
        price: (state: any): void => {
            return state.detail.price
        },
    },
    state: {
        detail: []
    }
}
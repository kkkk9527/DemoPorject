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
            context.commit("getDetail", result.data)
        }
    },
    mutations: {
        getDetail(state: any, data: any) {
            state.detail = data;
        }
    },
    getters: {
        categoryView: (state: any) => {
            return state.detail.categoryView
        },
        skuInfo:(state: any) => {
            return state.detail.skuInfo
        },
        spuSaleAttrList:(state: any) => {
            return state.detail.spuSaleAttrList
        },
        price:(state: any) => {
            return state.detail.price
        },
    },
    state: {
        detail: []
    }
}
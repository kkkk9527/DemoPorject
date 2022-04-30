import { Commit } from 'vuex'
import { getGoodList } from '@/api/request'

export default {
    namespaced: true,
    actions: {
        async GetGoodList(context: { commit: Commit }, data: any) {
            const result = await getGoodList(data);
            context.commit('GETGOODLIST', result.data);
        }
    },
    mutations: {
        GETGOODLIST(state: any, data: any) {
            state.goodList = data;
        }
    },
    state: {
        goodList: {}
    },
    getters: {
        GetTrademarkList: (state: any) => {
            return state.goodList.trademarkList || [];
        },
        GetAttrsList: (state: any) => {
            return state.goodList.attrsList || [];
        },
        GetGoodList: (state: any) => {
            return state.goodList.goodsList || [];
        }
    }
}
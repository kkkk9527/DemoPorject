import { Commit } from 'vuex'
import { addGoodToCart, getCartList } from '@/api/request'
interface GoodData {
    skuId: number,
    skuNum: number
}

export default {
    namespaced: true,
    actions: {
        async AddToCart(context: { commit: Commit }, data: GoodData) {
            const result = await addGoodToCart(data);
            if (result.status === 200) {
                return Promise.resolve(result)
            } else return Promise.reject(result.data.msg);
        },
        async getCart(context: { commit: Commit }) {
            const result = await getCartList();
            context.commit('GETCART',result.data.data)
        }
    },
    mutations: {
        GETCART(state: any, data: any) {
            state.cartList = data
        }
    },
    getters: {
        getCartList(state:any){
            try {
                return state.cartList[0].cartInfoList||[]
            } catch (error) {
                console.log();
            }
        }
    },
    state: {
        cartList: {}
    }
}
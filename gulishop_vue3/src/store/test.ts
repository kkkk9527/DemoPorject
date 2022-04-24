import { Commit } from 'vuex'
export default {
    namespaced: true,
    actions: {
        add(context: { commit: Commit }, num: number): void {
            context.commit('add', num);
        }
    },
    mutations: {
        add(state: any, num: number): void {
            state.count += num;
            state.count1 -= num;
        }
    },
    state:{
        count: 0,
        count1: 1
    }
}
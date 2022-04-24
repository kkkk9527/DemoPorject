import { Commit } from 'vuex'
import {getBaseCategoryList} from '@/api/request'
export default {
    namespaced: true,
    actions: {
        async GetBaseCategoryList(context: { commit: Commit }){
            const result = await getBaseCategoryList();
            //console.log(result);
            context.commit('ADDLIST',result.data);
        }
    },
    mutations: {
        ADDLIST(state:any,List:any){
            state.List=List;
        }
    },
    state:{
        List:[]
    }
}
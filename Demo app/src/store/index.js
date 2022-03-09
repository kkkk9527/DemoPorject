import Vue from "vue";
import Vuex from "vuex"
import { reqCategoryList, reqBannerList, reqFloorList, searchInfo } from '@/API'

Vue.use(Vuex)
    /**Home组件及相关组件数据 */
const Home = {
        namespaced: true,
        actions: {
            /** 获取三级菜单列表*/
            async categoryList(context) {
                let result = await reqCategoryList();
                if (result.code == 200) {
                    context.commit("CATEGORYLIST", result.data)
                }
            },
            /**获取NAV组件轮播图地址 */
            async getBannerList(context) {
                let result = await reqBannerList();
                if (result.code == 200) {
                    context.commit("GETBANNERLIST", result.data)
                }
            },
            /** 获取Floor组件轮播图地址*/
            async getFloorList(context) {
                let result = await reqFloorList();
                if (result.code == 200) {
                    context.commit("GETFLOORLIST", result.data)
                }
            },
        },
        mutations: {
            CATEGORYLIST(state, categorylist) {
                state.categoryList = categorylist;
            },
            GETBANNERLIST(state, bannerList) {
                state.bannerList = bannerList;
            },
            GETFLOORLIST(state, floorList) {
                state.floorList = floorList;
            },
        },
        state: {
            categoryList: [], //服务器三级菜单数据
            bannerList: [], //GoodsList轮播地址
            floorList: [] //Floor轮播地址
        }
    }
    /**Search组件及相关组件数据 */
const Search = {
    namespaced: true,
    actions: {
        async SearchInfo(context) {
            let result = await searchInfo(context.state.searchData);
            if (result.code == 200) {
                //console.log(result.data);
                context.commit('SEARCHINFO', result.data)
            }
        }
    },
    mutations: {
        SEARCHINFO(state, data) {
            state.SearchInfo = data;
        },
        //合并数据
        MERGEDATA(state, data) {
            Object.assign(state.searchData, data);
        }
    },
    getters: {
        goodsList(state) {
            //if (JSON.stringify(state) != '{}')
            return state.SearchInfo.goodsList || [];
        },
        attrsList(state) {
            //if (JSON.stringify(state) != '{}')
            return state.SearchInfo.attrsList || [];
        },
        pageNo(state) {
            //if (JSON.stringify(state) != '{}')
            return state.SearchInfo.pageNo || [];
        },
        pageSize(state) {
            // if (JSON.stringify(state) != '{}')
            return state.SearchInfo.pageSize || [];
        },
        total(state) {
            //if (JSON.stringify(state) != '{}')
            return state.SearchInfo.total || [];
        },
        totalPages(state) {
            //if (JSON.stringify(state) != '{}')
            return state.SearchInfo.totalPages || [];
        },
        trademarkList(state) {
            //if (JSON.stringify(state) != '{}')
            return state.SearchInfo.trademarkList || [];
        },
        breadInfo(state) {
            return state.searchData;
        }
    },
    state: {
        SearchInfo: [],
        searchData: {
            category1Id: undefined,
            //一级id
            category2Id: undefined,
            //二级id
            category3Id: undefined,
            //三级id
            categoryName: undefined,
            //商品种类
            keyword: undefined,
            //关键字
            order: undefined,
            //排序
            pageNo: 1,
            //代表第几页
            pageSize: 3,
            //每页展示的数据数量
            props: undefined,
            //平台给商品的信息
            trademark: undefined,
            //品牌
        }
    }
}


export default new Vuex.Store({
    modules: {
        Home,
        Search
    }
})
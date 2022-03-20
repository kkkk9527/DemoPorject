import Vue from "vue";
import Vuex from "vuex"
import { GetUserAddress, LoginOut, RequestUserInfo, Login, Register, getVerificationCode, checkCart, reqCategoryList, reqBannerList, reqFloorList, searchInfo, getGoodsInfo, addToCart, reqCardList, deletCardList } from '@/API'
import { getUUID } from '@/utils/uuid_token'

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

//商品详情组件
const Detail = {
    namespaced: true,
    actions: {
        //获取商品详细信息
        async getGoodInfo(context, id) {
            let result = await getGoodsInfo(id);
            if (result.code == 200) {
                context.commit("GETGOODINFO", result.data)
            }
        },
        //将用户选择的商品信息发送给服务器或者修改购物车中的商品数量
        async addToCart(context, params) {
            await addToCart(params);
        },
    },
    mutations: {
        GETGOODINFO(state, data) {
            state.goodInfo = data;
        },
    },
    getters: {
        getCategoryView(state) {
            return state.goodInfo.categoryView || {};
        },
        price(state) {
            return state.goodInfo.price || {};
        },
        skuInfo(state) {
            return state.goodInfo.skuInfo || {};
        },
        spuSaleAttrList(state) {
            return state.goodInfo.spuSaleAttrList || [];
        },
        valuesSkuJson(state) {
            return state.goodInfo.valuesSkuJson || {};
        }
    },
    state: {
        goodInfo: {},
        uuid_token: getUUID()
    }
}

//购物车组件仓库
const CardList = {
        namespaced: true,
        actions: {
            // 向服务器请求购物车数据
            async getCardList(context) {
                let result = await reqCardList();
                if (result.code == 200) {
                    context.commit("GETCARDLIST", result.data)
                }
            },
            //删除购物车中的商品
            async deletCardList(context, id) {
                let result = deletCardList(id);
                if (result.code == 200) {
                    return "ok"
                } else {
                    return Promise.reject(new Error('faile'))
                }
            },
            // 更改商品的选中状态
            async checkCart(context, params) {
                let result = checkCart(params);
                if (result.code == 200) {
                    return "ok"
                }
            }
        },
        mutations: {
            //将得到的数据添加到state中
            GETCARDLIST(state, data) {
                Vue.set(state, 'CardList', data)
            }
        },
        getters: {
            cartInfoList(state) {
                return state.CardList[0].cartInfoList || [];
            },
            activityRuleList(state) {
                return state.CardList[0].activityRuleList;
            },
            createTime(state) {
                return state.CardList[0].createTime;
            }
        },
        state: {
            CardList: []
        }
    }
    //登录与注册
const RegisterAndLogin = {
    namespaced: true,
    actions: {
        /* 获取验证码 */
        async getVerificationCode(context, phoneNum) {
            let result = await getVerificationCode(phoneNum)
            if (result.code == 200) {
                context.commit('GETVERIFICATIONCODE', result.data)
                return 'Ok'
            } else {
                return new Promise.reject(new Error('error'));
            }
        },
        /* 注册 */
        async Register(context, params) {
            let result = await Register(params)
            if (result.code == 200) {
                return 'Ok'
            } else {
                return new Promise.reject(new Error('error'));
            }
        },
        /* 登录 */
        async Login(context, params) {
            console.log(params);
            let result = await Login({ phone: params.phone, password: params.password })
            if (result.code == 200) {
                context.commit('LOGIN', result.data);
                if (params.checked) {
                    context.commit("SETTOKENTOLOCAL");
                }
                return 'Ok'
            } else {
                return Promise.reject(new Error('error'));
            }
        },
        /* 使用Token获取用户数据 */
        async RequestUserInfo(context) {
            let result = await RequestUserInfo()
            if (result.code == 200) {
                context.commit('REQUESTUSERINFO', result.data);
                return 'Ok'
            } else {
                return Promise.reject(new Error('error'));
            }
        },
        /* 登出 */
        async LoginOut(context) {
            let result = await LoginOut()
            if (result.code == 200) {
                context.commit('LOGINOUT');
                return 'Ok'
            } else {
                return Promise.reject(new Error('error'));
            }
        }
    },
    mutations: {
        GETVERIFICATIONCODE(state, data) {
            Vue.set(state, 'verificationCode', data);
        },
        //清空验证码
        CLEARVERIFICATIONCODE(state) {
            Vue.set(state, 'verificationCode', '');
        },
        /* 非自动登录 */
        LOGIN(state, data) {
            Vue.set(state, 'Token', data.token);
            sessionStorage.setItem('Token', data.token)
        },
        /* 自动登录 */
        SETTOKENTOLOCAL(state) {
            localStorage.setItem('Token', state.Token);
        },
        REQUESTUSERINFO(state, data) {
            Vue.set(state, 'userInfo', data)
        },
        /* 清空用户数据 */
        LOGINOUT(state) {
            Vue.set(state, 'Token', '');
            Vue.set(state, 'userInfo', {});
            localStorage.removeItem('Token');
            sessionStorage.removeItem('Token');
        }
    },
    getters: {
        userInfo(state) {
            return state.userInfo.nickName || '';
        }
    },
    state: {
        verificationCode: '',
        Token: '',
        userInfo: {}
    }
}

const OrderAndPay = {
    namespaced: true,
    actions: {
        async getUserAddressAndCartList(context) {
            let result = await GetUserAddress();
            let cartList = await reqCardList();
            if (result.code == 200 && cartList.code == 200) {
                context.commit('GETUSERADDRESS', result.data);
                context.commit('REQCARTLIST', cartList.data);
                return 'Ok'
            } else {
                return new Promise.reject(new Error('error'));
            }
        }
    },
    mutations: {
        GETUSERADDRESS(state, data) {
            Vue.set(state, 'userAddress', data);
        },
        REQCARTLIST(state, data) {
            Vue.set(state, 'userCartList', data);
        }
    },
    getters: {
        userAddress(state) {
            return state.userAddress || [];
        },
        userCartList(state) {
            return state.userCartList || [];
        }
    },
    state: {
        userAddress: [], //用户地址
        userCartList: [] //购物车详情
    }
}


export default new Vuex.Store({
    modules: {
        Home,
        Search,
        Detail,
        CardList,
        RegisterAndLogin,
        OrderAndPay
    }
})
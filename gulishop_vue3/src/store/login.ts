import { Commit } from 'vuex'
import { login, getUserInfo } from '@/api/request'
interface loginData {
    account: string,
    password: string,
    isAutoLogin: boolean
}

export default {
    namespaced: true,
    actions: {
        async Login(context: { commit: Commit }, params: loginData) {
            const logindata = {
                phone: params.account,
                password: params.password
            }
            const result = await login(logindata);
            if (result.data.code === 200) {
                context.commit('LOGIN', {
                    isAutoLogin: params.isAutoLogin,
                    userInfo: result.data
                });
                return 'OK';
            } else {
                return 'error';
            }
        },
        async getUserInfo(context: { commit: Commit }, params: loginData) {
            const result = await getUserInfo();
            context.commit('GETUSERINFO', result.data.data);
        }
    },
    mutations: {
        LOGIN(state: any, userInfo: any) {
            if (userInfo.isAutoLogin) {
                localStorage.setItem('token', userInfo.userInfo.data.token);
            } else {
                sessionStorage.setItem('token', userInfo.userInfo.data.token);
            }
        },
        GETUSERINFO(state: any, userInfo: any) {
            state.userInfo = userInfo;
        }
    },
    getters: {
        getUserName(state:any){
            try {
                return state.userInfo.nickName || '';
            } catch (error) {
                console.log(error)
            }
        }
    },
    state: {
        userInfo: {}
    }
}
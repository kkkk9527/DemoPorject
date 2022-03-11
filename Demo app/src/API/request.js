import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import store from '@/store'


const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

//配置请求拦截器
requests.interceptors.request.use((config) => {
    //确认是否有uuid_token属性
    if (store.state.Detail.uuid_token) {
        //在请求头添加字段将uuid_token发送给服务器
        config.headers.userTempId = store.state.Detail.uuid_token;
    }
    nprogress.start();
    return config;
});

//配置响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调
    nprogress.done();
    return res.data
}, (err) => {
    console.log(err);
    return Promise.reject(new Error('faile'));
});

export default requests;
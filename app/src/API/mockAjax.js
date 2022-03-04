/**创建axios实例对象 */
import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000,
});

//配置请求拦截器
requests.interceptors.request.use((config) => {
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